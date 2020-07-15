import {
    Component,
    Input,
    Output,
    OnInit,
    OnDestroy,
    EventEmitter,
    ChangeDetectionStrategy,
    ViewChild,
    ElementRef,
} from "@angular/core";

import { INPUT, MAX_TEXT_INPUT_LIMIT } from "@constants";

import { fromEvent, Subscription } from "rxjs";
import { map, debounceTime } from "rxjs/operators";

@Component({
    selector: "supr-input",
    template: `
        <form
            autocomplete="off"
            autocorrect="off"
            autofocus="true"
            spellcheck="false"
            novalidate
            (keydown.enter)="onSubmit($event)"
        >
            <input
                #input
                class="supr-input"
                [ngClass]="textType"
                [type]="type"
                [placeholder]="placeholder"
                [value]="value ? value : null"
                [disabled]="disabled"
                [maxLength]="maxLength"
                (click)="handleClick($event)"
                (focus)="handleInputFocus.emit($event)"
                (blur)="handleInputBlur.emit($event)"
                saClick
            />
            <input type="submit" class="suprHide" />
        </form>
    `,
    styleUrls: ["./supr-input.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit, OnDestroy {
    @Input() type: string = INPUT.TYPES.TEXT;
    @Input() textType: string;
    @Input() placeholder = "";
    @Input() disabled = false;
    @Input() value = "";
    @Input() maxLength = MAX_TEXT_INPUT_LIMIT;
    @Input() debounceTime = INPUT.DEBOUNCE_TIME;

    @Input() saObjectName: string;
    @Input() saObjectValue: string;
    @Input() saContext: string;
    @Input() saPosition: number;

    @Output() handleInputChange: EventEmitter<string> = new EventEmitter();
    @Output() handleSubmit: EventEmitter<any> = new EventEmitter();
    @Output() handleInputClick: EventEmitter<TouchEvent> = new EventEmitter();
    @Output() handleInputFocus: EventEmitter<TouchEvent> = new EventEmitter();
    @Output() handleInputBlur: EventEmitter<TouchEvent> = new EventEmitter();

    @ViewChild("input", { static: true }) inputEl: ElementRef;

    private keyPressSubscription: Subscription;

    ngOnInit() {
        this.registerForKeyup();
    }

    ngOnDestroy() {
        this.unsubscribeKeyPress();

        if (this.value === undefined) {
            this.value = "";
        }
    }

    getInputElement(): ElementRef {
        return this.inputEl;
    }

    onSubmit(event: KeyboardEvent) {
        event.preventDefault();
        event.stopPropagation();

        if (this.handleSubmit) {
            this.handleSubmit.emit(this.inputEl.nativeElement.value);
        }

        // Blur the input
        this.blurInput();

        return false;
    }

    handleClick(event: TouchEvent) {
        this.scrollInputIntoView();
        this.handleInputClick.emit(event);
    }

    private scrollInputIntoView() {
        setTimeout(() => {
            const inputEl = this.inputEl.nativeElement as HTMLElement;

            if (!inputEl) {
                return;
            }

            inputEl.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
    }

    private blurInput() {
        this.inputEl.nativeElement.blur();
    }

    private registerForKeyup() {
        if (!this.handleInputChange) {
            return;
        }

        this.keyPressSubscription = fromEvent(
            this.inputEl.nativeElement,
            "input"
        )
            .pipe(
                map((event: any) => event.target.value),
                debounceTime(this.debounceTime)
            )
            .subscribe((inputText: string) => {
                this.handleInputChange.emit(inputText);
            });
    }

    private unsubscribeKeyPress() {
        if (this.keyPressSubscription && !this.keyPressSubscription.closed) {
            this.keyPressSubscription.unsubscribe();
        }
    }
}
