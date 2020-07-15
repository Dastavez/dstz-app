import {
    Input,
    Component,
    ChangeDetectionStrategy,
    EventEmitter,
    OnInit,
    OnChanges,
    Output,
    SimpleChange,
    SimpleChanges,
    ChangeDetectorRef,
} from "@angular/core";

import { CLODUINARY_IMAGE_SIZE, SUPR_PROXY_IMAGE_SRC } from "@constants";

import { ImageService } from "@services/util/image.service";

import { UtilService } from "@services/util/util.service";

import { CloudinaryOptions, Image } from "@models";

@Component({
    selector: "supr-image",
    template: `
        <div [class.wrapper]="withWrapper">
            <img
                [src]="imgSrcToLoad"
                [alt]="alt"
                (load)="showImage()"
                suprImage
                lazyLoad="lazyLoad"
                (loadImage)="loadImage()"
            />
        </div>
    `,
    styleUrls: ["./supr-image.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent implements OnInit, OnChanges {
    @Input() src: string;
    @Input() alt: string;
    @Input() image: Image;
    @Input() lazyLoad = true;
    @Input() imgWidth: number;
    @Input() imgHeight: number;
    @Input() withWrapper = true;
    @Input() useDirectUrl: boolean;
    @Output() handleImageLoadError: EventEmitter<void> = new EventEmitter();

    imgSrcToLoad = SUPR_PROXY_IMAGE_SRC;
    cloudinaryUrl = "";
    imageLoaded = false;
    io: IntersectionObserver;
    startTime: any;
    endTime: any;
    imageLoadingFrom = "Cloudinary";

    constructor(
        private imageService: ImageService,
        private cdr: ChangeDetectorRef,
        private utilService: UtilService
    ) {}

    ngOnInit() {
        this.setImageUrl();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.canHandleChange(changes["src"])) {
            this.setImageUrl();
        }
    }

    showImage() {
        this.imageLoaded = true;
    }

    loadImage() {
        this.fetchImage(this.cloudinaryUrl)
            .then(() => {
                this.imgSrcToLoad = this.cloudinaryUrl;
                this.cdr.detectChanges();
                this.setAnalyticsEvent();
            })
            .catch((_err) => {});
    }

    private fetchImage(src: string): Promise<void> {
        if (!src) {
            return Promise.reject();
        }

        return new Promise((resolve, reject) => {
            const image = new Image();

            this.startTime = new Date().getTime();

            image.onload = () => {
                resolve();
                this.endTime = new Date().getTime();
            };

            image.onerror = () => {
                reject();
            };

            image.src = src;
        });
    }

    private setCloudinaryUrl() {
        if (!this.src) {
            return;
        }
        let cloudinaryOptions: CloudinaryOptions;

        if (!this.imgHeight && !this.imgWidth) {
            cloudinaryOptions = {
                imgWidth: CLODUINARY_IMAGE_SIZE.DEFAULT.WIDTH,
                imgHeight: CLODUINARY_IMAGE_SIZE.DEFAULT.HEIGHT,
            };
        } else {
            cloudinaryOptions = {
                imgHeight: this.imgHeight,
                imgWidth: this.imgWidth,
            };
        }
        this.cloudinaryUrl = this.imageService.getCloudinaryOptimizedImage(
            this.src,
            cloudinaryOptions
        );
    }

    private canHandleChange(change: SimpleChange) {
        return (
            change &&
            !change.firstChange &&
            change.previousValue !== change.currentValue
        );
    }

    private isCompressedImageAvailble(): boolean {
        const compressed_url = this.utilService.getNestedValue(
            this.image,
            `compressed_url`,
            ""
        );
        return !this.utilService.isEmpty(compressed_url);
    }

    private setImageUrl() {
        if (this.useDirectUrl) {
            this.cloudinaryUrl = this.src;
        } else if (
            this.isCompressedImageAvailble() &&
            this.isCloudfrontEnabled()
        ) {
            this.setCompressedUrl();
        } else {
            this.setCloudinaryUrl();
        }
    }

    private setCompressedUrl() {
        try {
            if (
                this.isPreviewImage() &&
                this.isCompressedPreviewUrlAvailable()
            ) {
                const imgUrl = this.getImageUrl(
                    CLODUINARY_IMAGE_SIZE.PREVIEW.HEIGHT,
                    CLODUINARY_IMAGE_SIZE.PREVIEW.HEIGHT
                );

                this.setCompressedImgUrl(imgUrl);
            } else if (
                this.isDefaultImage() &&
                this.isCompressedDefaultUrlAvailable()
            ) {
                const imgUrl = this.getImageUrl(
                    CLODUINARY_IMAGE_SIZE.DEFAULT.HEIGHT,
                    CLODUINARY_IMAGE_SIZE.DEFAULT.HEIGHT
                );

                this.setCompressedImgUrl(imgUrl);
            } else {
                this.setCloudinaryUrl();
            }
        } catch (error) {
            this.setCloudinaryUrl();
        }
    }

    private setCompressedImgUrl(imgUrl: string) {
        if (imgUrl) {
            this.imageLoadingFrom = "CloudFront";

            this.cloudinaryUrl = imgUrl;
        } else {
            this.setCloudinaryUrl();
        }
    }

    private getImageUrl(width: number, height: number): string {
        if (!width || !height) {
            return;
        }

        const imgSize = `${width}_${height}`;
        return this.utilService.getNestedValue(
            this.image.compressed_url,
            `${imgSize}.fullUrl`,
            ""
        );
    }

    private setAnalyticsEvent() {
        const imgLoadTime = this.getLoadTimeOfImage();

        if (!this.isImageLoadAnalyticsEnabled() || !imgLoadTime) {
            return;
        }
    }

    private getLoadTimeOfImage() {
        if (this.startTime && this.endTime) {
            return this.endTime - this.startTime;
        } else {
            return null;
        }
    }

    private isImageLoadAnalyticsEnabled(): boolean {
        // return this.settingsService.getSettingsValue(
        //     "isImageLoadAnalyticsEnabled",
        //     false
        // );
        return false;
    }

    private isCloudfrontEnabled(): boolean {
        // return this.settingsService.getSettingsValue(
        //     "isCloudfrontEnabled",
        //     false
        // );
        return false;
    }

    private isPreviewImage() {
        return (
            this.imgHeight === CLODUINARY_IMAGE_SIZE.PREVIEW.HEIGHT &&
            this.imgWidth === CLODUINARY_IMAGE_SIZE.PREVIEW.WIDTH
        );
    }

    private isCompressedPreviewUrlAvailable() {
        return this.getImageUrl(
            CLODUINARY_IMAGE_SIZE.PREVIEW.WIDTH,
            CLODUINARY_IMAGE_SIZE.PREVIEW.HEIGHT
        )
            ? true
            : false;
    }

    private isDefaultImage() {
        return (
            this.imgHeight === CLODUINARY_IMAGE_SIZE.DEFAULT.HEIGHT &&
            this.imgWidth === CLODUINARY_IMAGE_SIZE.DEFAULT.WIDTH
        );
    }

    private isCompressedDefaultUrlAvailable() {
        return this.getImageUrl(
            CLODUINARY_IMAGE_SIZE.DEFAULT.WIDTH,
            CLODUINARY_IMAGE_SIZE.DEFAULT.HEIGHT
        )
            ? true
            : false;
    }
}
