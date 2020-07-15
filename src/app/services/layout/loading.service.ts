import { Injectable } from "@angular/core";

import { LoadingController } from "@ionic/angular";
import { LoadingOptions } from "@ionic/core";

const DEFAULT_LOADER_OPTIONS = <LoadingOptions>{
    cssClass: "suprLoader",
    mode: "md",
    keyboardClose: false,
    spinner: "dots",
};

@Injectable({
    providedIn: "root",
})
export class LoadingService {
    private loading: HTMLIonLoadingElement;

    constructor(private loadingController: LoadingController) {}

    async present(options: LoadingOptions = {}) {
        // Close previous loader
        await this.dismiss();

        // Create new one
        const _options = this.getLoaderOptions(options);
        this.loading = await this.loadingController.create(_options);
        await this.loading.present();
    }

    async dismiss() {
        if (this.loading) {
            this.loading = null;
            await this.loadingController.dismiss();
        }
    }

    private getLoaderOptions(options: LoadingOptions): LoadingOptions {
        return { ...DEFAULT_LOADER_OPTIONS, ...options };
    }
}
