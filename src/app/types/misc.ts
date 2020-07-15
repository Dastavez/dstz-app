export enum ErrorType {
    CLIENT = "client",
    API = "api",
    NO_INTERNET = "no_internet",
    TIMEOUT = "timout",
    API_GENERIC = "api_generic",
}

export interface GlobalError {
    statusCode?: number;
    title?: string;
    subTitle?: string;
    actionText?: string;
    errorType?: ErrorType;
    errorUrl?: string;
}
