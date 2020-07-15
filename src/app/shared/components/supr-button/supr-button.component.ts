import {
    Component,
    ChangeDetectionStrategy,
    Input,
    Output,
    EventEmitter,
} from "@angular/core";

@Component({
    selector: "supr-button",
    template: `
        <button
            #btn
            type="button"
            class="button ion-activatable"
            [class.disabled]="disabled"
            [disabled]="disabled"
            (click)="onClick($event)"
        >
            <ng-container *ngIf="loading; else content">
                <supr-loader></supr-loader>
            </ng-container>

            <ng-template #content>
                <ion-ripple-effect></ion-ripple-effect>
                <ng-content></ng-content>
            </ng-template>
        </button>
    `,
    styleUrls: ["./supr-button-component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    @Input() disabled = false;
    @Input() loading = false;
    @Input() saObjectName: string;
    @Input() saObjectValue: any;
    @Input() saContext: string;
    @Input() saPosition: number;
    @Output() handleClick: EventEmitter<TouchEvent> = new EventEmitter();

    onClick(event: TouchEvent) {
        if (!this.loading && !this.disabled && this.handleClick) {
            setTimeout(() => this.handleClick.emit(event), 100);
        }
    }
}
