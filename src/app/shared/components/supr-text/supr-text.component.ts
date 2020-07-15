import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "supr-text",
    template: `
        <div
            class="default"
            [ngClass]="type"
            [class.truncate]="truncate"
            [class.inline]="inline"
        >
            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ["./supr-text.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextComponent {
    @Input() type: string;
    @Input() inline: boolean;
    @Input() truncate: boolean;
}
