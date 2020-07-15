import { Injectable } from "@angular/core";

import { Router, NavigationStart, NavigationExtras } from "@angular/router";

import { filter } from "rxjs/operators";

import { Platform, MenuController, NavController } from "@ionic/angular";

import { PAGE_ROUTES } from "@constants";

@Injectable({
    providedIn: "root",
})
export class RouterService {
    private currentUrl: string;
    private previousUrl: string;
    private ignoreBackButton: boolean;
    private lastRouteId: string;

    constructor(
        private router: Router,
        private navController: NavController,
        private platform: Platform,
        private menuController: MenuController
    ) {
        this.initialize();
    }

    public setAppExitFlag(exit = true) {
        console.log(exit);
    }

    public setIgnoreBackButton(ignore = true) {
        this.ignoreBackButton = ignore;
    }

    public getPreviousUrl() {
        return this.previousUrl;
    }

    public getCurrentUrl() {
        return this.currentUrl;
    }

    public goToUrl(url, extras: NavigationExtras = {}) {
        const queryParamStartIndex = url.indexOf("?");
        const queryParams = extras.queryParams || {};
        let baseUrl = url;

        /* Angular router encodes query params if we use it directly in url.
         As such we need to separate base path and create query params from the other relevant part of url */
        if (queryParamStartIndex > -1) {
            baseUrl = url.slice(0, queryParamStartIndex);
            try {
                const queryParamsString = url.slice(
                    queryParamStartIndex,
                    url.length
                );
                const query: any = new URLSearchParams(queryParamsString);
                for (const [key, value] of query) {
                    queryParams[key] = value;
                }
            } catch (err) {
                // this.errorService.logSentryError(
                //     { err, url },
                //     "Query params generation error"
                // );
            }
        }

        this.router.navigate([baseUrl], { ...extras, queryParams });
    }

    public openExternalUrl(url) {
        window.open(url, "_system", "location=yes");
    }

    public goToLandingPage(extras: NavigationExtras = {}) {
        this.router.navigate([PAGE_ROUTES.LANDING.PATH], extras);
    }

    public goToLoginPage(extras: NavigationExtras = {}) {
        this.router.navigate([PAGE_ROUTES.LOGIN.PATH], extras);
    }

    public goBack(routeId?: string) {
        if (routeId && this.lastRouteId && this.lastRouteId === routeId) {
            return;
        }

        this.lastRouteId = routeId;

        this.navController.pop();
    }

    private initialize() {
        this.platform.ready().then(() => {
            this.registerBackButtonListener();
            this.subscribeForRouterEvents();
        });
    }

    private subscribeForRouterEvents() {
        this.currentUrl = this.router.url;

        this.router.events
            .pipe(filter((event) => event instanceof NavigationStart))
            .subscribe((event) => {
                if (event instanceof NavigationStart) {
                    /* Modify the current & previous urls */
                    this.previousUrl = this.currentUrl;
                    this.currentUrl = event.url;
                }
            });
    }

    private registerBackButtonListener() {
        this.platform.backButton.subscribeWithPriority(1000, () =>
            this.handleBackButtonClick()
        );
    }

    private async handleBackButtonClick() {
        try {
            // Force not to handle
            if (this.ignoreBackButton) {
                return;
            }

            // Sidemenu check
            const isSideMenuOpen = await this.menuController.isOpen();
            if (isSideMenuOpen) {
                this.menuController.close();
                return;
            }

            // Modal open check
            // const isModalOpen = this.modalService.isModalOpened();
            // if (isModalOpen) {
            //     this.modalService.closeModal();
            //     return;
            // }

            // Can exit the app
            // if (this.canExitApp()) {
            //     const showCartPrompt = await this.cartService.canShowCartExitPrompt();

            //     if (showCartPrompt) {
            //         this.cartService.sendExitCartPromptNudge();
            //         return;
            //     }

            //     // Finally exit the
            //     this.platformService.exitApp();
            //     return;
            // }

            // Finally go back
            this.goBack();
        } catch (e) {}
    }
}
