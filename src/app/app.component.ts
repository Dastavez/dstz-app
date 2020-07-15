import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";

import { InitializeService } from "@services/util/initialize.service";
import { RouterService } from "@services/util/router.service";

@Component({
    selector: "dstz-root",
    templateUrl: "app.component.html",
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private initializeService: InitializeService,
        private routerService: RouterService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.initializeService.initialize();
            this.routerService.goToLandingPage();
        });
    }
}
