import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AuthState, AuthCurrentState } from "./auth.state";

export const selectFeature = createFeatureSelector<AuthState>("auth");

export const selectAuthToken = createSelector(
    selectFeature,
    (state: AuthState) => state.auth.token
);

export const selectLoginMobile = createSelector(
    selectFeature,
    (state: AuthState) => state.auth.mobile
);

export const selectWhatsAppStatus = createSelector(
    selectFeature,
    (state: AuthState) => state.auth.isWhatsAppOptIn
);

export const selectSendingOtp = createSelector(
    selectFeature,
    (state: AuthState) => state.currentState === AuthCurrentState.SENDING_OTP
);

export const selectVerifyingOtp = createSelector(
    selectFeature,
    (state: AuthState) => state.currentState === AuthCurrentState.VERIFYING_OTP
);

export const selectAuthErrorMessage = createSelector(
    selectFeature,
    (state: AuthState) => state.errorMsg
);

export const authStateWithError = createSelector(
    selectFeature,
    (state: AuthState) => ({
        currentState: state.currentState,
        errorMsg: state.errorMsg,
    })
);
