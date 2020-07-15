import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

import classNames from "classnames";
import { ICONS } from "./supr-icon.constants";

interface Icon {
    [name: string]: string;
}

@Component({
    selector: "supr-icon",
    template: `
        <div class="wrapper">
            <i class="icon" [ngClass]="getIconClass()"></i>
        </div>
    `,
    styleUrls: ["./supr-icon.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
    @Input() name: string;
    @Input() disabled = false;

    private readonly icons: Icon = ICONS;

    getIconClass(): string {
        if (!this.name || typeof this.name !== "string") {
            return;
        }

        const className = this.icons[this.name.toUpperCase()];
        if (!className) {
            return;
        }

        return classNames({
            [className]: true,
            disabled: this.disabled,
        });
    }
}
