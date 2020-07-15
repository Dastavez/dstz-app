import {
    Component,
    Input,
    Output,
    OnInit,
    OnChanges,
    SimpleChanges,
    ChangeDetectionStrategy,
    EventEmitter,
    SimpleChange,
} from "@angular/core";

import { of } from "rxjs";
import { catchError } from "rxjs/operators";

import { AuthService } from "@services/data/auth.service";
import { PlatformService } from "@services/util/platform.service";

import { ErrorCurrentState } from "@store/error/error.state";

import { GlobalError } from "@types";

@Component({
    selector: "supr-landing-layout",
    template: `
        <div class="suprContainer">
            <div class="suprScrollContent suprColumn center">
                Here is dastavez
            </div>
        </div>
    `,
    styleUrls: ["../styles/landing.page.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageLayoutComponent implements OnInit, OnChanges {
    @Input() error: GlobalError;
    @Input() errorState: ErrorCurrentState;
    @Input() settingsFetched: boolean;

    @Output() handleClearError: EventEmitter<void> = new EventEmitter();
    @Output() handleLoadProfile: EventEmitter<void> = new EventEmitter();
    @Output() handleFetchSettings: EventEmitter<void> = new EventEmitter();

    loading = true;

    constructor(
        private authService: AuthService,
        private platformService: PlatformService
    ) {}

    ngOnInit() {
        if (!this.settingsFetched) {
            this.handleFetchSettings.emit();
        }

        this.loadSession();
    }

    ngOnChanges(changes: SimpleChanges) {
        // this.handleSettingsChange(changes["settingsFetched"]);

        this.handleErrorStateChange(changes["errorState"]);
    }

    onRetry() {
        this.loading = true;
        this.handleClearError.emit();
        setTimeout(() => this.handleLoadProfile.emit(), 0);
    }

    // private handleSettingsChange(change: SimpleChange) {
    //     if (!this.canHandleChange(change)) {
    //         return;
    //     }
    //     this.handleChange();
    // }

    // private canHandleChange(change: SimpleChange) {
    //     return (
    //         change &&
    //         !change.firstChange &&
    //         change.previousValue !== change.currentValue
    //     );
    // }

    private handleErrorStateChange(change: SimpleChange) {
        if (!change || change.firstChange) {
            return;
        }

        if (
            change.previousValue !== change.currentValue &&
            change.currentValue !== ErrorCurrentState.NO_ERROR
        ) {
            this.loading = false;
            this.hideSplashScreen(0);
        }
    }

    private loadSession() {
        const subscription = this.authService
            .loadSession()
            .pipe(catchError(() => of("")))
            .subscribe((token: string) => {
                // this.sessionLoading = false;

                if (subscription && !subscription.closed) {
                    subscription.unsubscribe();
                }

                if (token) {
                    this.handleLoadProfile.emit();
                } else {
                    // this.handleChange();
                }
            });
    }

    private hideSplashScreen(timeout = 300) {
        setTimeout(() => {
            this.platformService.hideSplashScreen();
        }, timeout);
    }
}
