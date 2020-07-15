export interface AuthContent {
    token?: string;
    mobile?: string;
    isWhatsAppOptIn?: boolean;
}

export enum AuthCurrentState {
    NO_ACTION = "0",
    SENDING_OTP = "1",
    VERIFYING_OTP = "2",
}

export interface AuthState {
    auth?: AuthContent;
    errorMsg?: string;
    currentState?: AuthCurrentState;
}

export const initialState: AuthState = {
    auth: {
        token: null,
        mobile: null,
    },
    errorMsg: "",
    currentState: AuthCurrentState.NO_ACTION,
};
