import { GlobalError } from "@types";

export enum ErrorCurrentState {
    NO_ERROR = "0",
    NO_INTERNET = "1",
    TIMEOUT_ERROR = "2",
    API_ERROR = "3",
    GENERIC_ERROR = "4",
}

export interface ErrorState {
    currentState?: ErrorCurrentState;
    error?: GlobalError;
}

export const initialState: ErrorState = {
    currentState: ErrorCurrentState.NO_ERROR,
    error: null,
};
