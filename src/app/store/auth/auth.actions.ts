import { Action } from "@ngrx/store";
import { Auth } from "app/shared/models";

export enum ActionTypes {
    SEND_OTP_REQUEST = "[Auth] Send OTP Request",
    SEND_OTP_REQUEST_SUCCESS = "[Auth] Send OTP Request Success",
    SEND_OTP_REQUEST_FAILURE = "[Auth] Send OTP Request Failure",
    VERIFY_OTP_REQUEST = "[Auth] Verify OTP Request",
    VERIFY_OTP_REQUEST_SUCCESS = "[Auth] Verify OTP Request Success",
    VERIFY_OTP_REQUEST_FAILURE = "[Auth] Verify OTP Request Failure",
    UPDATE_AUTH_TOKEN_IN_DB = "[Auth] Store Auth token in DB",
    UPDATE_AUTH_TOKEN_IN_STORE = "[Auth] Update Auth token in Store",
    LOGOUT = "[Auth] Logout, Clearing store",
}

export class SendOtpRequestFailureAction implements Action {
    readonly type = ActionTypes.SEND_OTP_REQUEST_FAILURE;
    constructor(public payload: string) {}
}

export class VerifyOtpRequestAction implements Action {
    readonly type = ActionTypes.VERIFY_OTP_REQUEST;
    constructor(public payload: { mobile: string; otp: string }) {}
}

export class VerifyOtpRequestSuccessAction implements Action {
    readonly type = ActionTypes.VERIFY_OTP_REQUEST_SUCCESS;
    constructor(public payload: Auth) {}
}

export class VerifyOtpRequestFailureAction implements Action {
    readonly type = ActionTypes.VERIFY_OTP_REQUEST_FAILURE;
    constructor(public payload: string) {}
}

export class UpdateAuthTokenInDbAction implements Action {
    readonly type = ActionTypes.UPDATE_AUTH_TOKEN_IN_DB;
    constructor(public payload: { token: string }) {}
}

export class UpdateAuthTokenInStoreAction implements Action {
    readonly type = ActionTypes.UPDATE_AUTH_TOKEN_IN_STORE;
    constructor(public payload: { token: string }) {}
}

export class LogoutAction implements Action {
    readonly type = ActionTypes.LOGOUT;
}

export type Actions =
    | SendOtpRequestFailureAction
    | VerifyOtpRequestAction
    | VerifyOtpRequestSuccessAction
    | VerifyOtpRequestFailureAction
    | UpdateAuthTokenInDbAction
    | UpdateAuthTokenInStoreAction
    | LogoutAction;
