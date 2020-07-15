import {
    Component,
    ChangeDetectionStrategy,
    Input,
    Output,
    EventEmitter,
} from "@angular/core";

import { GlobalError } from "@types";

@Component({
    selector: "supr-error-content",
    template: `
        <div class="container">
            <div class="suprRow">
                <supr-icon name="error"></supr-icon>
                <supr-text type="subtitle" class="title">
                    {{ error?.title }}
                </supr-text>
            </div>
            <div class="divider16"></div>

            <supr-text type="body" class="subtitle">
                {{ error?.subTitle }}
            </supr-text>
            <div class="divider16"></div>

            <div class="divider36"></div>
            <supr-button (handleClick)="handleClick.emit()">
                <supr-text type="body">{{ error?.actionText }}</supr-text>
            </supr-button>
        </div>
    `,
    styleUrls: ["../supr-error.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorContentComponent {
    @Input() error: GlobalError;
    @Output() handleClick: EventEmitter<void> = new EventEmitter();
}
