import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of as observableOf } from "rxjs";
import { catchError, switchMap, tap, mergeMap } from "rxjs/operators";

import { NEW_USER_KEY } from "@constants";

import { Auth } from "@models";

import { ApiService } from "@services/data/api.service";
import { DbService } from "@services/data/db.service";
import { AuthService } from "@services/data/auth.service";
import { UtilService } from "@services/util/util.service";

import * as authActions from "./auth.actions";

@Injectable()
export class AuthStoreEffects {
    constructor(
        private apiService: ApiService,
        private authService: AuthService,
        private dbService: DbService,
        private utilService: UtilService,
        private actions$: Actions
    ) {}

    @Effect()
    // sendLoginOtpEffect$: Observable<Action> = this.actions$.pipe(
    //     ofType<authActions.SendOtpRequestAction>(
    //         authActions.ActionTypes.SEND_OTP_REQUEST
    //     ),
    //     switchMap(action => {
    //         return this.apiService.sendLoginOtp(action.payload).pipe(
    //             map(
    //                 (otpRes: SuprApi.PasswordRes) =>
    //                     new authActions.SendOtpRequestSuccessAction({
    //                         mobile: action.payload.phone_number,
    //                         isWhatsAppOptIn: otpRes.isWhatsAppOptIn,
    //                     })
    //             ),

    //             catchError(error =>
    //                 observableOf(
    //                     new authActions.SendOtpRequestFailureAction(
    //                         error.status === 400
    //                             ? "Oops! Something went wrong"
    //                             : ""
    //                     )
    //                 )
    //             )
    //         );
    //     })
    // );
    @Effect()
    verifyLoginOtpEffect$: Observable<Action> = this.actions$.pipe(
        ofType<authActions.VerifyOtpRequestAction>(
            authActions.ActionTypes.VERIFY_OTP_REQUEST
        ),
        switchMap((action) => {
            const { mobile, otp } = action.payload;
            return this.apiService.verifyLoginOtp(mobile, otp).pipe(
                tap((data: Auth) => {
                    if (data.user_type === "new") {
                        this.dbService.setLocalData(NEW_USER_KEY, true);
                    }

                    this.authService.setAuthToken(data.key);
                }),

                mergeMap((data: Auth) => [
                    new authActions.VerifyOtpRequestSuccessAction(data),
                    // new userActions.SetUserTypeAction({
                    //     userType: data.user_type,
                    // }),
                ]),
                catchError((error) => {
                    return observableOf(
                        new authActions.VerifyOtpRequestFailureAction(
                            error.status === 400
                                ? this.utilService.getNestedValue(
                                      error,
                                      "error.otp.0",
                                      "Invalid OTP or username"
                                  )
                                : "Invalid OTP or username"
                        )
                    );
                })
            );
        })
    );
}
