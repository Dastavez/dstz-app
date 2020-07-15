import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";

import {
    StoreState,
    ErrorStoreSelectors,
    ErrorStoreActions,
} from "@supr/store";

@Injectable()
export class LandingPageAdapter {
    // user$ = this.store.pipe(select(UserStoreSelectors.selectUser));

    // userState$ = this.store.pipe(
    //     select(UserStoreSelectors.selectUserCurrentState)
    // );

    // address$ = this.store.pipe(select(AddressStoreSelectors.selectAddress));

    error$ = this.store.pipe(select(ErrorStoreSelectors.selectError));

    errorState$ = this.store.pipe(
        select(ErrorStoreSelectors.selectErrorCurrentState)
    );

    // settingsFetched$ = this.store.pipe(
    //     select(MiscStoreSelectors.selectSettingsFetched)
    // );

    constructor(private store: Store<StoreState>) {}

    // fetchProfileWithAddress() {
    //     this.store.dispatch(
    //         new UserStoreActions.LoadProfileWithAddressRequestAction({
    //             address: true,
    //             wallet: true,
    //             t_plus_one: true,
    //         })
    //     );
    // }

    clearGlobalError() {
        this.store.dispatch(new ErrorStoreActions.ClearGlobalError());
    }
}
