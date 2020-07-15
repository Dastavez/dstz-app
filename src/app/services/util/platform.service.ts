import { Injectable, NgZone } from "@angular/core";

import { Platform } from "@ionic/angular";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { UniqueDeviceID } from "@ionic-native/unique-device-id/ngx";
import { Vibration } from "@ionic-native/vibration/ngx";

import { environment } from "@environments/environment";

import { STATUS_BAR_COLORS, DEVICE_UUID_DB_KEY } from "@constants";
import { DbService } from "@services/data/db.service";

@Injectable({
    providedIn: "root",
})
export class PlatformService {
    private deviceId: string;

    constructor(
        private platform: Platform,
        private statusBar: StatusBar,
        private splashScreen: SplashScreen,
        private inAppBrowser: InAppBrowser,
        private ngZone: NgZone,
        private uniqueDeviceID: UniqueDeviceID,
        private vibration: Vibration,
        private dbService: DbService
    ) {}

    exitApp() {
        if (this.isCordova()) {
            navigator["app"].exitApp();
        } else {
            window.open("http://www.suprdaily.com/", "_self");
        }
    }

    vibrate(timeInMs: number) {
        if (this.isCordova()) {
            this.vibration.vibrate(timeInMs);
        }
    }

    isIOS(): boolean {
        return this.isCordova() && this.platform.is("ios");
    }

    isAndroid(): boolean {
        return this.isCordova() && this.platform.is("android");
    }

    isBrowser(): boolean {
        return this.platform.is("pwa");
    }

    isCordova(): boolean {
        return this.platform.is("cordova");
    }

    setStatusBarForHomePage() {
        this.setStatusBarCustom(STATUS_BAR_COLORS.HOME);
    }

    setStatusBarForLoginPage() {
        this.setStatusBarCustom(STATUS_BAR_COLORS.LOGIN);
    }

    setStatusBarDefault() {
        this.ngZone.runOutsideAngular(() => {
            if (this.isCordova()) {
                this.statusBar.styleDefault();
                this.setStatusBarCustom(STATUS_BAR_COLORS.DEFAULT);
            }
        });
    }

    setStatusBarCustom(colorCode: string) {
        this.ngZone.runOutsideAngular(() => {
            if (this.isCordova()) {
                this.statusBar.overlaysWebView(false);
                this.statusBar.backgroundColorByHexString(colorCode);
            }
        });
    }

    redirectToPlayStore() {
        let appUpdateUrl: string;
        if (this.isIOS()) {
            appUpdateUrl =
                "itms-apps://itunes.apple.com/in/app/" +
                environment.ios.name +
                "/id" +
                environment.ios.id +
                "?mt=8";
        } else if (this.isAndroid()) {
            appUpdateUrl =
                "market://details?id=" + environment.android.package_name;
        } else {
            return;
        }

        // Redirect first
        this.inAppBrowser.create(appUpdateUrl, "_system");
    }

    getAppVersion(): string {
        if (this.isAndroid()) {
            return environment.android.version;
        } else if (this.isIOS()) {
            return environment.ios.version;
        }

        return "";
    }

    getFullAppVersion(): string {
        if (this.isAndroid()) {
            return environment.android.full_version;
        } else if (this.isIOS()) {
            return environment.ios.full_version;
        }

        return "";
    }

    getAppCheckVersion(): number {
        if (this.isAndroid()) {
            return environment.android.check_version;
        } else if (this.isIOS()) {
            return environment.ios.check_version;
        }

        return 0;
    }

    getAppPackageName(): string {
        if (this.isAndroid()) {
            return environment.android.package_name;
        } else if (this.isIOS()) {
            return environment.ios.name;
        }

        return "";
    }

    hideSplashScreen() {
        if (this.isCordova()) {
            this.splashScreen.hide();
        }
    }

    getDeviceWidth(): number {
        return this.platform.width();
    }

    getDeviceId(): string {
        return this.deviceId;
    }

    async setDeviceId() {
        if (!this.isCordova()) {
            return;
        }

        try {
            let uuid = await this.dbService.getData(DEVICE_UUID_DB_KEY);
            if (!uuid) {
                uuid = await this.createUniqueDeviceId();
            }

            // Store it in service variable
            this.deviceId = uuid;
        } catch (err) {
            console.log(err);
        }
    }

    getPlatform(): string {
        if (this.isAndroid()) {
            return "android";
        }
        if (this.isIOS()) {
            return "ios";
        }
        if (this.isBrowser()) {
            return "pwa";
        }

        return "";
    }

    private async createUniqueDeviceId(): Promise<string> {
        const uuid = await this.uniqueDeviceID.get();
        await this.dbService.setData(DEVICE_UUID_DB_KEY, uuid);
        return uuid;
    }
}
