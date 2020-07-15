import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { authReducer } from "./auth.reducer";
import { AuthStoreEffects } from "./auth.effects";

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature("auth", authReducer),
        EffectsModule.forFeature([AuthStoreEffects]),
    ],
    providers: [],
})
export class AuthStoreModule {}
