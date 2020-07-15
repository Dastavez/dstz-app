import { NgModule, ErrorHandler } from "@angular/core";
import { RouteReuseStrategy } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { IonicStorageModule } from "@ionic/storage";

import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { SmsRetriever } from "@ionic-native/sms-retriever/ngx";
import { Vibration } from "@ionic-native/vibration/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { Device } from "@ionic-enterprise/device/ngx";
// import { Smartlook } from "@ionic-native/smartlook/ngx";
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { UniqueDeviceID } from "@ionic-native/unique-device-id/ngx";
import { Diagnostic } from "@ionic-native/diagnostic/ngx";
import { Geolocation } from "@ionic-enterprise/geolocation/ngx";
import { LocationAccuracy } from "@ionic-native/location-accuracy/ngx";
import { Network } from "@ionic-native/network/ngx";
import { AppAvailability } from "@ionic-native/app-availability/ngx";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import * as Sentry from "@sentry/browser";
import * as _io from "intersection-observer";

import { environment } from "@environments/environment";

import { SharedModule } from "@shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";

import { RootStoreModule } from "@store/store.module";
import { rootReducer, metaReducers } from "@supr/store";

import { ErrorInterceptor } from "app/interceptors/error.interceptor";
import { HttpReqInterceptor } from "app/interceptors/http.interceptor";

import { DB_STORAGE_CONFIG } from "@constants";

Sentry.init({
    dsn: `https://${environment.sentry.key}@sentry.io/${environment.sentry.project}`,
    release: `supr-daily-${environment.production ? "production" : "staging"}-${
        environment.version
    }-${
        environment.ionic_build
            ? `ionicLiveDeploy-${environment.ionic_patch_version}`
            : "android"
    }`,
});

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(DB_STORAGE_CONFIG),
        HttpClientModule,
        RootStoreModule,
        StoreModule.forRoot(rootReducer, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        AppRoutingModule,
        SharedModule.forRoot(),
    ],

    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpReqInterceptor,
            multi: true,
        },
        { provide: ErrorHandler, useClass: ErrorInterceptor },
        InAppBrowser,
        SmsRetriever,
        Vibration,
        Device,
        // Smartlook,
        FirebaseX,
        UniqueDeviceID,
        Diagnostic,
        Geolocation,
        LocationAccuracy,
        Network,
        AppAvailability,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
