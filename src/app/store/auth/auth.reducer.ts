import { Actions, ActionTypes } from "./auth.actions";
import { initialState, AuthState, AuthCurrentState } from "./auth.state";

export function authReducer(state = initialState, action: Actions): AuthState {
    switch (action.type) {
        case ActionTypes.SEND_OTP_REQUEST_FAILURE: {
            return {
                ...state,
                errorMsg: action.payload,
                currentState: AuthCurrentState.NO_ACTION,
            };
        }
        case ActionTypes.VERIFY_OTP_REQUEST: {
            return {
                ...state,
                currentState: AuthCurrentState.VERIFYING_OTP,
                errorMsg: "",
            };
        }
        case ActionTypes.VERIFY_OTP_REQUEST_SUCCESS: {
            return {
                ...state,
                auth: {
                    token: action.payload.key,
                },
                currentState: AuthCurrentState.NO_ACTION,
            };
        }
        case ActionTypes.VERIFY_OTP_REQUEST_FAILURE: {
            return {
                ...state,
                errorMsg: action.payload,
                currentState: AuthCurrentState.NO_ACTION,
            };
        }
        case ActionTypes.UPDATE_AUTH_TOKEN_IN_STORE: {
            return {
                ...state,
                auth: {
                    ...state.auth,
                    token: action.payload.token,
                },
            };
        }
        default: {
            return state;
        }
    }
}
