import {
    Directive,
    Output,
    EventEmitter,
    ElementRef,
    AfterViewInit,
    Input,
} from "@angular/core";

let _io: IntersectionObserver;

const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
        if (entry && (entry.isIntersecting || entry.intersectionRatio > 0)) {
            _io.unobserve(entry.target);
            if (
                entry.target["_instance"] &&
                entry.target["_instance"].loadImage
            ) {
                entry.target["_instance"].loadImage.emit();
            }
        }
    });
};

if (window && "IntersectionObserver" in window) {
    _io = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: "0px",
        threshold: [0],
    });
}

@Directive({
    selector: "[suprImage]",
})
export class SuprImageDirective implements AfterViewInit {
    @Input() lazyLoad: boolean;
    @Output() loadImage: EventEmitter<any> = new EventEmitter();

    constructor(private _element: ElementRef) {}

    ngAfterViewInit() {
        this.lazyLoad && this.canLazyLoad()
            ? this._observe()
            : this.instantExecute();
    }

    private _observe() {
        if (_io && this._element) {
            this._element.nativeElement._instance = this;
            _io.observe(this._element.nativeElement);
        }
    }

    private instantExecute() {
        if (this.loadImage) {
            this.loadImage.emit();
        }
    }

    private canLazyLoad(): boolean {
        return window && "IntersectionObserver" in window;
    }
}
