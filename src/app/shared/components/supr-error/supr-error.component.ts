import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { Observable } from "rxjs";

import { ErrorAdapter } from "@shared/adapters/error.adapter";
import { ErrorCurrentState } from "@store/error/error.state";
import { GlobalError } from "@types";

@Component({
    selector: "supr-error",
    template: `
        <supr-error-wrapper
            [error]="error$ | async"
            [errorState]="errorState$ | async"
            (handleClearError)="clearError()"
        >
        </supr-error-wrapper>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent implements OnInit {
    error$: Observable<GlobalError>;
    errorState$: Observable<ErrorCurrentState>;

    constructor(private adapter: ErrorAdapter) {}

    ngOnInit() {
        this.error$ = this.adapter.error$;
        this.errorState$ = this.adapter.errorState$;
    }

    clearError() {
        this.adapter.clearError();
    }
}
