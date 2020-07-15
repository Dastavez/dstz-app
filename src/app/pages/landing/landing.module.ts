import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { SharedModule } from "@shared/shared.module";

import { LandingPageContainer } from "./containers/landing.container";
import { LandingPageLayoutComponent } from "./layouts/landing.layout";
import { LandingPageAdapter } from "./services/landing.adapter";

import { landingComponents } from "./components";

const routes: Routes = [
    {
        path: "",
        component: LandingPageContainer,
    },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        SharedModule,
    ],
    declarations: [
        LandingPageLayoutComponent,
        LandingPageContainer,
        ...landingComponents,
    ],
    providers: [LandingPageAdapter],
})
export class LandingPageModule {}
