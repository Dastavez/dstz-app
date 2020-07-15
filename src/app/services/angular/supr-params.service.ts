import { HttpParams } from "@angular/common/http";

import { SuprApi } from "@types";

export class SuprHttpParams extends HttpParams {
    constructor(public data: SuprApi.HttpParams) {
        super();
    }
}
