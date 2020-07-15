import { Injectable } from "@angular/core";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse,
} from "@angular/common/http";

import { Observable, TimeoutError, of, throwError } from "rxjs";
import { catchError, timeout, retry, tap, finalize } from "rxjs/operators";

import { API_TIMEOUT_TIME, PLATFORM } from "@constants";

import { SuprHttpParams } from "@services/angular/supr-params.service";
import { AuthService } from "@services/data/auth.service";
import { PlatformService } from "@services/util/platform.service";
import { ErrorService } from "@services/integration/error.service";

import { UtilService } from "@services/util/util.service";

@Injectable()
export class HttpReqInterceptor implements HttpInterceptor {
    constructor(
        private authService: AuthService,
        private platformService: PlatformService,
        private errorService: ErrorService,
        private utilService: UtilService
    ) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let endTimestamp: number;
        let responseTime: number;

        const { method, url } = request;
        const updatedRequest = this.addHeaders(request);
        const silent = this.getSilentParam(request);
        const retryCount = this.getRetryCount(request);
        const useCustomErrorHandler = this.getUseCustomErrorHandlerParam(
            request
        );
        // const meta = this.getRequestMeta(request);
        const startTimestamp = new Date().getTime();
        let isCancelled = true;

        return next.handle(updatedRequest).pipe(
            timeout(API_TIMEOUT_TIME),
            retry(retryCount),

            tap(
                (event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        isCancelled = false;
                        // statusCode = event.status;
                        // responseBody = event.body;
                    }
                },
                (error: HttpErrorResponse) => {
                    console.log(error);
                    isCancelled = false;
                    // statusCode = error.status;
                }
            ),

            finalize(() => {
                endTimestamp = new Date().getTime();
                responseTime = endTimestamp - startTimestamp;
                if (!isCancelled) {
                }
            }),

            catchError((error: HttpErrorResponse) => {
                endTimestamp = new Date().getTime();
                responseTime = endTimestamp - startTimestamp;

                return this.handleError(
                    error,
                    method,
                    url,
                    responseTime,
                    silent,
                    useCustomErrorHandler
                );
            })
        );
    }

    private addHeaders(request: HttpRequest<any>): HttpRequest<any> {
        const headers = {};
        const authToken = this.authService.getAuthToken();

        if (authToken && authToken !== "") {
            headers["Authorization"] = `Token ${authToken}`;
        }

        const deviceUuid = this.platformService.getDeviceId();
        if (deviceUuid) {
            headers["app-device-id"] = deviceUuid;
        }

        headers["app-platform"] = this.getAppPlatform();
        headers["app-version"] = this.platformService.getAppVersion();

        return request.clone({
            setHeaders: headers,
        });
    }

    private handleError(
        error: HttpErrorResponse,
        method: string,
        url: string,
        responseTime: number,
        silent?: boolean,
        useCustomErrorHandler?: boolean
    ) {
        console.log({ method }, { responseTime });
        if (useCustomErrorHandler) {
            return throwError(error);
        }
        if (silent) {
            return of(null);
        }

        const httpCode = error.status;

        if (this.isOffline(httpCode)) {
            this.errorService.handleNoInternetError();
        } else if (this.isTimeoutError(error)) {
            this.errorService.handleTimeOutError();
        } else {
            switch (httpCode) {
                case 400:
                    this.errorService.handleApiError(error);
                    break;
                case 401:
                    this.authService.clearAuthToken();
                    break;
                default:
                    this.errorService.handleGenericError(url);
            }
        }

        return throwError(error);
    }

    private getUseCustomErrorHandlerParam(request: HttpRequest<any>): boolean {
        if (request.params instanceof SuprHttpParams) {
            return this.utilService.getNestedValue(
                request,
                "params.data.useCustomErrorHandler",
                false
            );
        }

        return false;
    }

    private getSilentParam(request: HttpRequest<any>): boolean {
        if (request.params instanceof SuprHttpParams) {
            return this.utilService.getNestedValue(
                request,
                "params.data.silent",
                false
            );
        }

        return false;
    }

    private getRetryCount(request: HttpRequest<any>): number {
        if (request.params instanceof SuprHttpParams) {
            return this.utilService.getNestedValue(
                request,
                "params.data.retryCount",
                1
            );
        }

        return 1;
    }

    // private getRequestMeta(request: HttpRequest<any>): SuprApi.Meta {
    //     if (request.params instanceof SuprHttpParams) {
    //         return this.utilService.getNestedValue(
    //             request,
    //             "params.data.meta",
    //             {}
    //         );
    //     }

    //     return {};
    // }

    private isOffline(httpCode: number): boolean {
        return httpCode === 0 && !navigator.onLine;
    }

    private isTimeoutError(error: HttpErrorResponse): boolean {
        return error instanceof TimeoutError;
    }

    private getAppPlatform(): string {
        return this.platformService.isIOS() ? PLATFORM.IOS : PLATFORM.ANDROID;
    }
}
