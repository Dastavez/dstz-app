import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";

import {
    StoreState,
    ErrorStoreSelectors,
    ErrorStoreActions,
} from "@supr/store";

@Injectable()
export class ErrorAdapter {
    error$ = this.store.pipe(select(ErrorStoreSelectors.selectError));

    errorState$ = this.store.pipe(
        select(ErrorStoreSelectors.selectErrorCurrentState)
    );

    constructor(private store: Store<StoreState>) {}

    clearError() {
        this.store.dispatch(new ErrorStoreActions.ClearGlobalError());
    }
}
