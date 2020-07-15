import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "supr-loader",
    template: `
        <div class="wrapper suprColumn center">
            <ion-spinner name="dots"></ion-spinner>
        </div>
    `,
    styleUrls: ["./supr-loader.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuprLoaderComponent {}
