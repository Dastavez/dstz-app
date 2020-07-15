import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

import { Device } from "@ionic-enterprise/device/ngx";

import { PlatformService } from "@services/util/platform.service";

import { ERROR_CODES, ERROR_TEXTS, PLATFORM } from "@constants";

import { GlobalError, ErrorType } from "@types";

@Injectable({
    providedIn: "root",
})
export class ErrorService {
    constructor(
        private platformService: PlatformService,
        private device: Device
    ) {
        this.setDeviceData();
    }
    deviceData = {};
    setContext(userData: any) {
        console.log(userData);
        // this.userData = userData;
    }

    handleNoInternetError() {
        // const { NO_INTERNET } = ERROR_TEXTS;
        // const errorObj = {
        //     statusCode: ERROR_CODES.NO_INTERNET,
        //     title: NO_INTERNET.TITLE,
        //     subTitle: NO_INTERNET.SUB_TITLE,
        //     actionText: NO_INTERNET.ACTION_TEXT,
        //     errorType: ErrorType.NO_INTERNET,
        // };
        // this.storeService.setGlobalError(errorObj);
    }

    handleTimeOutError(url?: string) {
        console.log(url);
        // const { TIMEOUT } = ERROR_TEXTS;
        // const errorObj = {
        //     statusCode: ERROR_CODES.TIMEOUT_ERROR,
        //     title: TIMEOUT.TITLE,
        //     subTitle: TIMEOUT.SUB_TITLE,
        //     actionText: TIMEOUT.ACTION_TEXT,
        //     errorType: ErrorType.TIMEOUT,
        //     errorUrl: url,
        // };
        // this.storeService.setGlobalError(errorObj);
    }

    handleApiError(error: HttpErrorResponse, url?: string) {
        if (!error || !error.error) {
            return;
        }

        console.log(url);
        // const { API_ERROR } = ERROR_TEXTS;

        // const data = error.error;
        // const message = this.parseApiError(data);

        // const errorObj = {
        //     statusCode: ERROR_CODES.API_ERROR,
        //     title: API_ERROR.TITLE,
        //     subTitle: message || API_ERROR.SUB_TITLE,
        //     actionText: API_ERROR.ACTION_TEXT,
        //     errorType: ErrorType.API,
        //     errorUrl: url,
        // };

        // this.storeService.setGlobalError(errorObj);
    }

    handleGenericError(url?: string, errObj?: Partial<GlobalError>) {
        const { GENERIC_ERROR } = ERROR_TEXTS;

        let errorObj = {
            statusCode: ERROR_CODES.GENERIC_ERROR,
            title: GENERIC_ERROR.TITLE,
            subTitle: GENERIC_ERROR.SUB_TITLE,
            actionText: GENERIC_ERROR.ACTION_TEXT,
            errorType: ErrorType.API_GENERIC,
            errorUrl: url,
        };

        if (errObj) {
            errorObj = {
                ...errorObj,
                ...errObj,
            };
        }

        // this.storeService.setGlobalError(errorObj);

        /* Log the error at Sentry */
        /* this.logSentryError(
            new Error(JSON.stringify(error.error)),
            `${error.status}`
        ); */
    }

    handleCustomError(error: GlobalError) {
        // const { GENERIC_ERROR } = ERROR_TEXTS;
        console.log(error);
        // const errorObj = {
        //     statusCode: ERROR_CODES.GENERIC_ERROR,
        //     title: error.title || GENERIC_ERROR.TITLE,
        //     subTitle: error.subTitle || GENERIC_ERROR.SUB_TITLE,
        //     actionText: error.actionText || GENERIC_ERROR.ACTION_TEXT,
        //     errorType: error.errorType || ErrorType.CLIENT,
        // };

        // this.storeService.setGlobalError(errorObj);
    }

    // private parseApiError(data: any): string {
    //     let result = "";

    //     if (data && data.statusMessage) {
    //         return data.statusMessage;
    //     }

    //     Object.keys(data).forEach((key) => {
    //         const prop = data[key];
    //         if (this.utilService.isLengthyArray(prop)) {
    //             prop.forEach((message: string) => {
    //                 const messageArr = message
    //                     .toLowerCase()
    //                     .split(".")
    //                     .filter((msg) => msg !== "");
    //                 const capsMsgArr = messageArr.map((msg) =>
    //                     this.utilService.capitalizeFirstLetter(msg.trim())
    //                 );
    //                 const finalMessage = capsMsgArr.join(". ") + ".";
    //                 result += finalMessage;
    //             });
    //         }
    //     });

    //     return result;
    // }

    private setDeviceData() {
        if (this.platformService.isCordova() && this.device) {
            this.deviceData = {
                uuid: this.device.uuid,
                manufacturer: this.device.manufacturer,
                model: this.device.model,
                type: this.device.platform,
                osName: this.device.platform,
                osVersion: this.device.version,
                platform: this.platformService.isIOS()
                    ? PLATFORM.IOS
                    : PLATFORM.ANDROID,
                userAgent: navigator.userAgent,
                appVersion: this.platformService.getAppVersion(),
            };
        } else {
            this.deviceData = {};
        }
    }
}
