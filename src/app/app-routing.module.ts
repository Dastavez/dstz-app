import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

import { PAGE_ROUTES, SCREEN_NAMES } from "@constants";

const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "",
                redirectTo: "landing",
                pathMatch: "full",
            },
            {
                path: PAGE_ROUTES.LANDING.PATH,
                loadChildren: () =>
                    import("./pages/landing/landing.module").then(
                        (m) => m.LandingPageModule
                    ),
                data: {
                    preload: true,
                    screenName: SCREEN_NAMES.LANDING,
                },
            },
            {
                path: "**",
                redirectTo: "/",
            },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            enableTracing: false,
            preloadingStrategy: PreloadAllModules,
            onSameUrlNavigation: "reload",
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
