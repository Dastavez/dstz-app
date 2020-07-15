import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";
// import { SuprToastOptions, ToastPosition } from "@types";

const DEFAULT_TOAST_OPTIONS = {
    cssClass: "suprToast",
    position: "bottom",
    duration: 2000,
    delayTime: 300,
    autoHide: true,
};

@Injectable({
    providedIn: "root",
})
export class ToastService {
    private currentToast: HTMLIonToastElement;

    constructor(private toastController: ToastController) {}

    async present(message: string, toastOptions: any = {}): Promise<void> {
        if (!message) {
            return;
        }
        const options = this.generateToastOptions(message, toastOptions);
        this.currentToast = await this.toastController.create({
            ...options,
        });

        setTimeout(async () => {
            await this.currentToast.present();
        }, options.delayTime);
    }

    async dismiss(): Promise<void> {
        if (this.currentToast) {
            await this.toastController.dismiss();
            this.currentToast = null;
        }
    }

    private generateToastOptions(message: string, toastOptions: any) {
        const {
            actionText,
            actionHandler,
            autoHide,
            duration,
            cssClass,
            position,
        } = toastOptions;

        const options: any = {
            message,
            ...DEFAULT_TOAST_OPTIONS,
        };

        this.setCssClass(options, cssClass);
        this.setPosition(options, position);
        this.setDuration(options, duration, autoHide);
        this.setActionHandler(options, actionText, actionHandler);

        return options;
    }

    private setCssClass(options: any, cssClass: string) {
        if (cssClass) {
            options.cssClass = cssClass;
        }
    }

    private setPosition(options: any, position: any) {
        if (position) {
            options.position = position;
        }
    }

    private setDuration(options: any, duration: number, autoHide: boolean) {
        if (autoHide === false) {
            options.duration = 0;
        } else {
            options.duration = duration || DEFAULT_TOAST_OPTIONS.duration;
        }
    }

    private setActionHandler(
        options: any,
        actionText: string,
        actionHandler: Function
    ) {
        if (!actionText) {
            return;
        }

        options.buttons = [
            {
                text: actionText,
                role: "okay",
                handler: () => {
                    if (actionHandler) {
                        actionHandler();
                    }
                },
            },
        ];
    }
}
