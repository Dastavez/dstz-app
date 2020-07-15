import { AuthStoreState } from "./auth";

import { RouterStoreState } from "./router";

import { ErrorStoreState } from "./error";

export interface StoreState {
    auth: AuthStoreState.AuthState;

    router: RouterStoreState.RouterReducerState;

    error: ErrorStoreState.ErrorState;
}
