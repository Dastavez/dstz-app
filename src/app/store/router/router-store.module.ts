import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { routerReducer, StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreModule } from "@ngrx/store";

import { SuprRouterStateSerializer } from "./router-serializer";

export const routerStateConfig = {
    stateKey: "router",
};

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(routerStateConfig.stateKey, routerReducer),
        StoreRouterConnectingModule.forRoot({
            serializer: SuprRouterStateSerializer,
        }),
    ],
    providers: [],
})
export class RouterStoreModule {}
