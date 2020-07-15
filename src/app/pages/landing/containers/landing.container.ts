import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { ErrorCurrentState } from "@store/error/error.state";
import { GlobalError } from "@types";

import { LandingPageAdapter as Adapter } from "@pages/landing/services/landing.adapter";

@Component({
    selector: "supr-home-header-container",
    template: `
        <supr-landing-layout
            [error]="error$ | async"
            [errorState]="errorState$ | async"
            [settingsFetched]="settingsFetched$ | async"
            (handleLoadProfile)="fetchProfile()"
            (handleClearError)="clearGlobalError()"
            (handleFetchSettings)="fetchSettings()"
        ></supr-landing-layout>
    `,
})
export class LandingPageContainer implements OnInit {
    error$: Observable<GlobalError>;
    errorState$: Observable<ErrorCurrentState>;
    settingsFetched$: Observable<boolean>;

    constructor(private adapter: Adapter) {}

    ngOnInit() {
        this.error$ = this.adapter.error$;
        this.errorState$ = this.adapter.errorState$;
    }

    fetchProfile() {
        // this.adapter.fetchProfileWithAddress();
    }

    clearGlobalError() {
        this.adapter.clearGlobalError();
    }

    fetchSettings() {
        // this.settingsService.fetchSettings();
    }
}
