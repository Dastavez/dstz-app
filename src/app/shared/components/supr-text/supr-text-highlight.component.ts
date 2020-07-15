import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "supr-text-highlight",
    template: `
        <div
            class="default"
            [ngClass]="type"
            [class.truncate]="truncate"
            [class.inline]="inline"
            [innerHTML]="
                text
                    | highlightText
                        : highlightedText
                        : match
                        : caseSensitive
                        : 'searchHighlight'
            "
        ></div>
    `,
    styleUrls: ["./supr-text.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextHighlightComponent {
    @Input() type: string;
    @Input() inline: boolean;
    @Input() truncate: boolean;
    @Input() text: string;
    @Input() highlightedText: string;
    @Input() match:
        | "MULTI_MATCH"
        | "SINGLE_MATCH"
        | "SINGLE_AND_STARTS_WITH_MATCH" = "MULTI_MATCH";
    @Input() caseSensitive = true;
}
