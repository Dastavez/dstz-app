import { routerReducer } from "@ngrx/router-store";
import {
    ActionReducerMap,
    MetaReducer,
    ActionReducer,
    Action,
} from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";

import { environment } from "@environments/environment";
import { StoreState } from "./store.state";

import { AuthStoreActions } from "app/store/auth";

import { authReducer } from "./auth/auth.reducer";

import { errorReducer } from "./error/error.reducer";

export const rootReducer: ActionReducerMap<StoreState> = {
    auth: authReducer,

    router: routerReducer,

    error: errorReducer,
};

export function clearStore(
    reducer: ActionReducer<StoreState>
): ActionReducer<StoreState> {
    return function (state: StoreState, action: Action): StoreState {
        if (action.type === AuthStoreActions.ActionTypes.LOGOUT) {
            state = undefined;
        }
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<StoreState>[] = !environment.production
    ? [storeFreeze, clearStore]
    : [clearStore];
