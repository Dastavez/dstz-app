import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
    Output,
    EventEmitter,
} from "@angular/core";

import { ErrorCurrentState } from "@store/error/error.state";
import { GlobalError } from "@types";

@Component({
    selector: "supr-landing-error",
    template: `
        <supr-landing-no-internet
            *ngIf="noInternetError"
            (handleRetry)="handleRetry.emit()"
        ></supr-landing-no-internet>
        <supr-landing-oops
            *ngIf="oopsError"
            (handleRetry)="handleRetry.emit()"
        ></supr-landing-oops>
    `,
    styleUrls: ["../../styles/landing.page.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingErrorComponent implements OnInit {
    @Input() error: GlobalError;
    @Input() errorState: ErrorCurrentState;
    @Output() handleRetry: EventEmitter<void> = new EventEmitter();

    noInternetError = false;
    oopsError = false;

    ngOnInit() {
        this.setErrorType();
    }

    private setErrorType() {
        if (!this.error) {
            return;
        }

        switch (this.errorState) {
            case ErrorCurrentState.NO_ERROR:
                return;
            case ErrorCurrentState.NO_INTERNET:
                this.noInternetError = true;
                break;
            default:
                this.oopsError = true;
        }
    }
}
