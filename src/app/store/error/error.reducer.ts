import { Actions, ActionTypes } from "./error.actions";
import { initialState, ErrorState, ErrorCurrentState } from "./error.state";

import { GlobalError } from "@types";

export function errorReducer(
    state = initialState,
    action: Actions
): ErrorState {
    switch (action.type) {
        case ActionTypes.SET_GLOBAL_ERROR: {
            return parseError(action.payload.error);
        }

        case ActionTypes.CLEAR_GLOBAL_ERROR: {
            return initialState;
        }

        default: {
            return state;
        }
    }
}

function parseError(error: GlobalError): ErrorState {
    const { statusCode } = error;
    let currentState: ErrorCurrentState;

    switch (statusCode) {
        case 100:
            currentState = ErrorCurrentState.NO_INTERNET;
            break;
        case 500:
            currentState = ErrorCurrentState.API_ERROR;
            break;
        case 504:
            currentState = ErrorCurrentState.TIMEOUT_ERROR;
            break;
        case 999:
            currentState = ErrorCurrentState.GENERIC_ERROR;
            break;
        default:
            currentState = ErrorCurrentState.NO_ERROR;
    }

    return { currentState, error };
}
