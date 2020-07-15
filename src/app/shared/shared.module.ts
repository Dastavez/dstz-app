import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from "@angular/core";

import { IonicModule } from "@ionic/angular";
import { CallNumber } from "@ionic-native/call-number/ngx";

import { providers } from "app/services";
import { sharedComponents } from "./components";
import { sharedPipes } from "./pipes";
import { sharedDirectives } from "./directives";
import { sharedAdapters } from "./adapters";

@NgModule({
    declarations: [...sharedComponents, ...sharedPipes, ...sharedDirectives],
    entryComponents: [...sharedComponents],
    imports: [CommonModule, IonicModule],
    exports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ...sharedComponents,
        ...sharedPipes,
        ...sharedDirectives,
    ],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [...providers, ...sharedAdapters, CallNumber],
        };
    }
}
