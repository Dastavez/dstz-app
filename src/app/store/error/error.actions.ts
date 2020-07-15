import { Action } from "@ngrx/store";
import { GlobalError } from "@types";

export enum ActionTypes {
    SET_GLOBAL_ERROR = "[Error] Setting the error",
    CLEAR_GLOBAL_ERROR = "[Error] Clearing the error",
}

export class SetGlobalError implements Action {
    readonly type = ActionTypes.SET_GLOBAL_ERROR;
    constructor(public payload: { error: GlobalError }) {}
}

export class ClearGlobalError implements Action {
    readonly type = ActionTypes.CLEAR_GLOBAL_ERROR;
}

export type Actions = SetGlobalError | ClearGlobalError;
