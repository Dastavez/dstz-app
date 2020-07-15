import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ErrorState } from "./error.state";

export const selectFeature = createFeatureSelector<ErrorState>("error");

export const selectError = createSelector(
    selectFeature,
    (state: ErrorState) => state.error
);

export const selectErrorCurrentState = createSelector(
    selectFeature,
    (state: ErrorState) => state.currentState
);
