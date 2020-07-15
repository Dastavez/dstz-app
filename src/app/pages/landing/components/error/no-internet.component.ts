import {
    Component,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
} from "@angular/core";
import { NO_INTERNET_TEXTS } from "@pages/landing/constants";

@Component({
    selector: "supr-landing-no-internet",
    template: `
        <div class="error suprColumn center">
            <!-- <supr-svg class="internet"></supr-svg> -->
            <div class="divider16"></div>
            <supr-text type="heading" class="title">
                {{ TEXTS.TITLE }}
            </supr-text>
            <div class="divider16"></div>
            <supr-text class="subtitle">
                {{ TEXTS.SUB_TITLE }}
            </supr-text>
            <div class="divider24"></div>
            <supr-button (handleClick)="handleRetry.emit()">
                <supr-text type="body">{{ TEXTS.ACTION_TEXT }}</supr-text>
            </supr-button>
        </div>
    `,
    styleUrls: ["../../styles/landing.page.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingNoInternetErrorComponent {
    @Output() handleRetry: EventEmitter<void> = new EventEmitter();

    TEXTS = NO_INTERNET_TEXTS;
}
