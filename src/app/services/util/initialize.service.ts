import { Injectable } from "@angular/core";

import { Observable, forkJoin } from "rxjs";

import { ErrorService } from "@services/integration/error.service";

import { UtilService } from "@services/util/util.service";

import { PlatformService } from "@services/util/platform.service";

@Injectable({
    providedIn: "root",
})
export class InitializeService {
    constructor(
        private utilService: UtilService,

        private errorService: ErrorService,

        private platformService: PlatformService
    ) {}

    async initialize() {
        /* Initialize device id */
        await this.platformService.setDeviceId();
    }

    async handleUserFlow(user: any) {
        this.setUserContext(user);
        this.onSessionInit(user);

        if (!this.isSessionPresent(user)) {
            // this.routeToLoginPage();
        } else {
            this.routeToHomePage();
            // this.routerService.goToSuprPassPage();
        }
    }

    getLaunchData(isAnonymousUser = false): Observable<any> {
        const observablesInput = isAnonymousUser ? [] : [];

        return forkJoin(observablesInput);
    }

    private setUserContext(user: any) {
        if (!this.isSessionPresent(user)) {
            return;
        }

        this.errorService.setContext(user);
    }

    private onSessionInit(user: any) {
        if (!this.isSessionPresent(user)) {
            return;
        }
    }

    private isSessionPresent(user: any): boolean {
        return !this.utilService.isEmpty(user) && user.hasOwnProperty("id");
    }

    private routeToHomePage() {
        // this.routerService.goToHomePage();
    }
}
