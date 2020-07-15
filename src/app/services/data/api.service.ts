import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";
import { Observable } from "rxjs";

import { API_ROUTES } from "@constants";

import { environment } from "@environments/environment";

import { SuprHttpParams } from "@services/angular/supr-params.service";

import { SuprApi } from "@types";

@Injectable({
    providedIn: "root",
})
export class ApiService {
    private static readonly apiHostUrl = environment.api_host;
    private static readonly appApiHostUrl = environment.app_api_host;

    constructor(private http: HttpClient) {}

    verifyLoginOtp(mobileNo: string, otp: string): Observable<any> {
        const url = this.getApiUrl("login");
        const body = { username: mobileNo, otp };
        return this.http.post<any>(url, body);
    }

    fetchSettings(
        silent = true,
        retryCount = 1,
        useCustomErrorHandler = false
    ): Observable<any> {
        const url = this.getApiUrl("settings", {
            service: "AppApi",
        });
        return this.http
            .get<any>(url, {
                params: new SuprHttpParams({
                    silent,
                    retryCount,
                    useCustomErrorHandler,
                }),
            })
            .pipe(map((res) => this.fetchModelDataFromRes(res)));
    }

    private getApiUrl(
        key: string,
        extras?: SuprApi.ReqExtras,
        baseUrl?: string
    ): string {
        const urlEndpoint = API_ROUTES[key.toUpperCase()];
        let paramsStr = "";
        let queryStr = "";

        if (extras) {
            if (extras.urlParams) {
                paramsStr = extras.urlParams + "/";
            }

            if (extras.queryParams) {
                const params = extras.queryParams;
                queryStr = Object.keys(params)
                    .map((name) =>
                        params[name] ? `${name}=${params[name]}` : ""
                    )
                    .filter((kV) => !!kV)
                    .join("&");
                queryStr = "?" + queryStr;
            }

            if (extras.service === "AppApi") {
                return (
                    ApiService.appApiHostUrl +
                    urlEndpoint +
                    paramsStr +
                    queryStr
                );
            }
        }

        if (baseUrl) {
            return baseUrl + urlEndpoint + paramsStr + queryStr;
        }

        return ApiService.apiHostUrl + urlEndpoint + paramsStr + queryStr;
    }

    private fetchModelDataFromRes(res: any, key?: string): any {
        if (this.isSuccessResponse(res)) {
            return key ? res.data[key] : res.data;
        }
    }

    private isSuccessResponse(res: any): boolean {
        if (!res || res.statusCode !== 0) {
            const message =
                res && res.statusMessage
                    ? res.statusMessage
                    : "Oops something went wrong";

            throw { statusCode: res.statusCode, message };
        }

        return true;
    }
}
