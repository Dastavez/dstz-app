import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { TimeoutError } from "rxjs";

import { ErrorService } from "@services/integration/error.service";

@Injectable()
export class ErrorInterceptor extends ErrorHandler {
    private errorService: ErrorService;

    constructor(private injector: Injector) {
        super();
    }

    handleError(error: any) {
        /* Manually injecting ErrorService to prevent cyclic dependancy */
        if (!this.errorService) {
            this.errorService = this.injector.get(ErrorService);
        }

        super.handleError(error);
        if (error instanceof TimeoutError) {
            return;
        }
        if (error instanceof Error) {
            // this.errorService.logSentryError(error, "Runtime Error");
        } else {
            // this.errorService.logSentryError(new Error(error), "Runtime Error");
        }
    }
}
