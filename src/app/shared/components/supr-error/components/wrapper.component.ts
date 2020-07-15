import {
    Component,
    Input,
    ChangeDetectionStrategy,
    Output,
    EventEmitter,
    SimpleChanges,
    OnChanges,
} from "@angular/core";

import { MODAL_NAMES, PAGE_ROUTES } from "@constants";
import { ErrorCurrentState } from "@store/error/error.state";
import { RouterService } from "@services/util/router.service";
import { GlobalError } from "@types";

@Component({
    selector: "supr-error-wrapper",
    template: `
        <ng-container *ngIf="showModal">
            <!-- <supr-modal
                modalName="${MODAL_NAMES.OOPS_ERROR}"
                (handleClose)="closeModal()"
                [saObjectName]="error?.errorType"
                [saObjectValue]="error?.subTitle"
                [saContext]="error?.errorUrl"
            >
                <supr-error-content
                    [error]="error"
                    (handleClick)="closeModal()"
                ></supr-error-content>
            </supr-modal> -->
        </ng-container>
    `,
    styleUrls: ["../supr-error.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorWrapperComponent implements OnChanges {
    @Input() error: GlobalError;
    @Input() errorState: ErrorCurrentState;
    @Output() handleClearError: EventEmitter<void> = new EventEmitter();

    showModal: boolean;

    constructor(private routerService: RouterService) {}

    ngOnChanges(changes: SimpleChanges): void {
        const change = changes["errorState"];
        if (!change || change.firstChange) {
            return;
        }

        if (change.previousValue !== change.currentValue) {
            this.handleError();
        }
    }

    closeModal() {
        this.showModal = false;
        this.handleClearError.emit();
    }

    private handleError() {
        if (
            !this.isLandingScreen() &&
            this.errorState !== ErrorCurrentState.NO_ERROR
        ) {
            this.showModal = true;
        }
    }

    private isLandingScreen(): boolean {
        const currentUrl = this.routerService.getCurrentUrl();
        const landingPath = PAGE_ROUTES.LANDING.PATH;
        return currentUrl && currentUrl.indexOf(landingPath) > -1;
    }
}
