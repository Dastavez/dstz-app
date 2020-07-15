import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { errorReducer } from "./error.reducer";

@NgModule({
    imports: [CommonModule, StoreModule.forFeature("error", errorReducer)],
    providers: [],
})
export class ErrorStoreModule {}
