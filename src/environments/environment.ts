/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export const environment = {
    production: false,
    api_host: "http://development.pkzbqgwu2y.ap-south-1.elasticbeanstalk.com/",
    app_api_host: "http://supr-app-api.ap-south-1.elasticbeanstalk.com/api/",
    cx_host: "http://complaints-api.internal.suprdaily.com/",
    name: "Supr Daily 2.0",
    version: "30030",
    contact: "+919699000035",
    ionic_patch_version: 1,
    ionic_build: false,
    android: {
        package_name: "com.supr.suprdaily",
        version: "3.0.30",
        full_version: "30030",
        check_version: 30030,
    },
    ios: {
        name: "com.supr.suprdailyios",
        id: 1458875299,
        version: "2.3.4",
        full_version: "30005",
        check_version: 20304,
    },
    analytics: {
        segment: "KUPxT1jmkc2GpTOswVttM7LBtkttMWq6",
        ga: "UA-76696244-6",
    },
    sentry: {
        key: "db596ce95fe942f8945c1df0b3bb6366",
        project: "83216",
    },
    oneSignal: {
        key: "f18e4424-b55f-4c8b-a9cf-de29386c51cd",
    },
    appsFlyer: {
        key: "fyHqBAJ4PJQPp7XzT7tSLe",
    },
    freshChat: {
        appId: "99a7a277-aca9-436d-a091-a746fc6d3767",
        appKey: "9bc25c56-fe49-4e6e-a6a1-d4d4fcc8bbe9",
    },
    razorpay: {
        key: "rzp_test_e57cKurSNqL8yQ",
    },
    mapKey: {
        android: "AIzaSyCDrbb0P5E9INfPvF7gdqqtqmWk0cPTfwQ",
    },
    smartlook: {
        apiKey: "806fea63992d1bc78bf763ba8f3addaa05fbfb37",
    },
    freshbot: {
        dataClient: "ddae76e0fb6e8a39c8b90c046a68737cacec4d8c",
        dataBotHash: "4e973abbbd536e43fa3799d21e36232ab4ac8db6",
    },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import "zone.js/dist/zone-error"; // Included with Angular CLI.
