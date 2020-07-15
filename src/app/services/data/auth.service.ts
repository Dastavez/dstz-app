import { Injectable } from "@angular/core";

import { Observable, from } from "rxjs";
import { tap } from "rxjs/operators";

import { DbService } from "@services/data/db.service";
import { RouterService } from "@services/util/router.service";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private authToken: string;

    constructor(
        private dbService: DbService,
        private routerService: RouterService
    ) {}

    loadSession(): Observable<string> {
        return from(this.loadToken()).pipe(
            tap((token: string) => {
                if (token) {
                    this.authToken = token;
                }
            })
        );
    }

    isAuthenticated(): boolean {
        // Check whether the token is present
        return !!this.authToken;
    }

    getAuthToken(): string {
        return this.authToken;
    }

    setAuthToken(token: string, storeInDB = true) {
        this.authToken = token;

        // Store it in DB too.
        if (storeInDB) {
            this.dbService.setData("authToken", token);
        }
    }

    clearAuthToken() {
        this.clearTokenFromApp();
        this.clearTokenFromDb();
    }

    logout(redirectToLoginPage = true) {
        this.clearTokenFromApp();
        this.dbService.clearDB();
        this.dbService.clearLocalState();

        if (redirectToLoginPage) {
            this.routerService.goToLoginPage({ replaceUrl: true });
        }
    }

    private loadToken(): Promise<any> {
        return this.dbService.getData("authToken");
    }

    private clearTokenFromApp() {
        this.authToken = null;
    }

    private clearTokenFromDb() {
        return this.dbService.clearData("authToken");
    }
}
