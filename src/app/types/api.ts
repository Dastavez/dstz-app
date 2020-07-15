export namespace SuprApi {
    export interface ApiRes {
        statusCode: number;
        data?: any;
        statusMessage: string;
    }

    export interface ReqExtras {
        urlParams?: string | number;
        queryParams?: {
            [name: string]: string | number | boolean;
        };
        service?: string;
    }

    export interface Meta {
        context?: string;
    }

    export interface HttpParams {
        silent?: boolean;
        meta?: Meta;
        retryCount?: number;
        useCustomErrorHandler?: boolean;
    }
}
