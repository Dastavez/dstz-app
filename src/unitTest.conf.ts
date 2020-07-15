import { HttpClientModule } from "@angular/common/http";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { SmsRetriever } from "@ionic-native/sms-retriever/ngx";
import { Vibration } from "@ionic-native/vibration/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { Device } from "@ionic-enterprise/device/ngx";
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { UniqueDeviceID } from "@ionic-native/unique-device-id/ngx";
import { Diagnostic } from "@ionic-native/diagnostic/ngx";
import { Geolocation } from "@ionic-enterprise/geolocation/ngx";
import { LocationAccuracy } from "@ionic-native/location-accuracy/ngx";
import { Network } from "@ionic-native/network/ngx";
import { AppAvailability } from "@ionic-native/app-availability/ngx";
import { IonicStorageModule } from "@ionic/storage";

import { DB_STORAGE_CONFIG } from "@constants";

class StatusBarMock {}
class SplashScreeMock {}
class InAppBrowserMock {}
class SmsRetrieverMock {}
class VibrationMock {}
class DeviceMock {}
class FirebaseXMock {}
class UniqueDeviceIDMock {}
class DiagnosticMock {}
class GeolocationMock {}
class LocationAccuracyMock {}
class NetworkMock {}
class AppAvailabilityMock {}

export const BaseUnitTestImportsIonic = [
    IonicStorageModule.forRoot(DB_STORAGE_CONFIG),
    HttpClientModule,
];

export const BaseUnitTestProvidersIonic = [
    { provide: StatusBar, useClass: StatusBarMock },
    { provide: SplashScreen, useClass: SplashScreeMock },
    { provide: InAppBrowser, useClass: InAppBrowserMock },
    { provide: SmsRetriever, useClass: SmsRetrieverMock },
    { provide: Vibration, useClass: VibrationMock },
    { provide: Device, useClass: DeviceMock },
    { provide: FirebaseX, useClass: FirebaseXMock },
    { provide: UniqueDeviceID, useClass: UniqueDeviceIDMock },
    { provide: Diagnostic, useClass: DiagnosticMock },
    { provide: Geolocation, useClass: GeolocationMock },
    { provide: LocationAccuracy, useClass: LocationAccuracyMock },
    { provide: Network, useClass: NetworkMock },
    { provide: AppAvailability, useClass: AppAvailabilityMock },
];
