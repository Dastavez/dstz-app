import { Injectable } from "@angular/core";

import {
    CLOUDINARY_BASE_URL,
    CLOUDINARY_DEFAULT_TRANSFORMATIONS,
    CLOUDINARY_TRANSFORMATIONS,
} from "@constants";

import { CloudinaryOptions } from "@models";

@Injectable({ providedIn: "root" })
export class ImageService {
    getCloudinaryOptimizedImage(
        imgSrc: string,
        options?: CloudinaryOptions
    ): string {
        const { imgHeight, imgWidth, ..._options } = options;

        const transformations = [...CLOUDINARY_DEFAULT_TRANSFORMATIONS];

        if (imgWidth) {
            transformations.push(`w_${imgWidth}`);
        }

        if (imgHeight) {
            transformations.push(`h_${imgHeight}`);
        }

        Object.keys(_options).forEach(key => {
            if (
                CLOUDINARY_TRANSFORMATIONS[key] !== undefined &&
                _options[key]
            ) {
                transformations.push(CLOUDINARY_TRANSFORMATIONS[key]);
            }
        });

        return this._getCloudinaryUrl(transformations.join(","), imgSrc);
    }

    private _getCloudinaryUrl(transformations: string, imgSrc: string): string {
        return `${CLOUDINARY_BASE_URL}${transformations}/${imgSrc}`;
    }
}
