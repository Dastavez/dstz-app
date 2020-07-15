cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open",
        "window.open"
      ]
    },
    {
      "id": "cordova-plugin-request-location-accuracy.RequestLocationAccuracy",
      "file": "plugins/cordova-plugin-request-location-accuracy/www/android/RequestLocationAccuracy.js",
      "pluginId": "cordova-plugin-request-location-accuracy",
      "clobbers": [
        "cordova.plugins.locationAccuracy"
      ]
    },
    {
      "id": "cordova-open-native-settings.Settings",
      "file": "plugins/cordova-open-native-settings/www/settings.js",
      "pluginId": "cordova-open-native-settings",
      "clobbers": [
        "cordova.plugins.settings"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic",
      "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Location",
      "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.location.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.location"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Bluetooth",
      "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.bluetooth.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.bluetooth"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Wifi",
      "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.wifi.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.wifi"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Camera",
      "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.camera.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.camera"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Notifications",
      "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.notifications.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.notifications"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Microphone",
      "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.microphone.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.microphone"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Contacts",
      "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.contacts.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.contacts"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Calendar",
      "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.calendar.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.calendar"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_NFC",
      "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.nfc.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.nfc"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_External_Storage",
      "file": "plugins/cordova.plugins.diagnostic/www/android/diagnostic.external_storage.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.external_storage"
      ]
    },
    {
      "id": "com.razorpay.cordova.RazorpayCheckout",
      "file": "plugins/com.razorpay.cordova/www/RazorpayCheckout.js",
      "pluginId": "com.razorpay.cordova",
      "clobbers": [
        "RazorpayCheckout"
      ]
    },
    {
      "id": "cordova-plugin-freshchat.Freshchat",
      "file": "plugins/cordova-plugin-freshchat/www/freshchat_plugin.js",
      "pluginId": "cordova-plugin-freshchat",
      "clobbers": [
        "Freshchat"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "call-number.CallNumber",
      "file": "plugins/call-number/www/CallNumber.js",
      "pluginId": "call-number",
      "clobbers": [
        "call"
      ]
    },
    {
      "id": "cordova-sqlite-storage.SQLitePlugin",
      "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
      "pluginId": "cordova-sqlite-storage",
      "clobbers": [
        "SQLitePlugin"
      ]
    },
    {
      "id": "@ionic-enterprise/geolocation.geolocation",
      "file": "plugins/@ionic-enterprise/geolocation/www/android/geolocation.js",
      "pluginId": "@ionic-enterprise/geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "@ionic-enterprise/geolocation.PositionError",
      "file": "plugins/@ionic-enterprise/geolocation/www/PositionError.js",
      "pluginId": "@ionic-enterprise/geolocation",
      "runs": true
    },
    {
      "id": "@ionic-enterprise/device.device",
      "file": "plugins/@ionic-enterprise/device/www/device.js",
      "pluginId": "@ionic-enterprise/device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-sms-retriever-manager.AndroidSmsRetriever",
      "file": "plugins/cordova-plugin-sms-retriever-manager/www/smsRetriever.js",
      "pluginId": "cordova-plugin-sms-retriever-manager",
      "clobbers": [
        "cordova.plugins.smsRetriever"
      ]
    },
    {
      "id": "cordova-plugin-idfa.Idfa",
      "file": "plugins/cordova-plugin-idfa/www/Idfa.js",
      "pluginId": "cordova-plugin-idfa",
      "merges": [
        "cordova.plugins.idfa"
      ]
    },
    {
      "id": "cordova-plugin-firebasex.FirebasePlugin",
      "file": "plugins/cordova-plugin-firebasex/www/firebase.js",
      "pluginId": "cordova-plugin-firebasex",
      "clobbers": [
        "FirebasePlugin"
      ]
    },
    {
      "id": "cordova-plugin-ionic.common",
      "file": "plugins/cordova-plugin-ionic/dist/common.js",
      "pluginId": "cordova-plugin-ionic",
      "clobbers": [
        "IonicCordova"
      ]
    },
    {
      "id": "cordova-plugin-ionic.guards",
      "file": "plugins/cordova-plugin-ionic/dist/guards.js",
      "pluginId": "cordova-plugin-ionic",
      "runs": true
    },
    {
      "id": "cordova-plugin-uniquedeviceid.UniqueDeviceID",
      "file": "plugins/cordova-plugin-uniquedeviceid/www/uniqueid.js",
      "pluginId": "cordova-plugin-uniquedeviceid",
      "merges": [
        "window.plugins.uniqueDeviceID"
      ]
    },
    {
      "id": "cordova-plugin-appsflyer-sdk.appsflyer",
      "file": "plugins/cordova-plugin-appsflyer-sdk/www/appsflyer.js",
      "pluginId": "cordova-plugin-appsflyer-sdk",
      "clobbers": [
        "window.plugins.appsFlyer"
      ]
    },
    {
      "id": "cordova-plugin-appsflyer-sdk.AppsFlyerError",
      "file": "plugins/cordova-plugin-appsflyer-sdk/www/AppsFlyerError.js",
      "pluginId": "cordova-plugin-appsflyer-sdk",
      "clobbers": [
        "AppsFlyerError"
      ]
    },
    {
      "id": "cordova-launch-review.LaunchReview",
      "file": "plugins/cordova-launch-review/www/launchreview.js",
      "pluginId": "cordova-launch-review",
      "clobbers": [
        "LaunchReview"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection",
        "navigator.network.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "cordova-plugin-appavailability.AppAvailability",
      "file": "plugins/cordova-plugin-appavailability/www/AppAvailability.js",
      "pluginId": "cordova-plugin-appavailability",
      "clobbers": [
        "appAvailability"
      ]
    },
    {
      "id": "@ionic-enterprise/social-sharing.SocialSharing",
      "file": "plugins/@ionic-enterprise/social-sharing/www/SocialSharing.js",
      "pluginId": "@ionic-enterprise/social-sharing",
      "clobbers": [
        "window.plugins.socialsharing"
      ]
    },
    {
      "id": "@ionic-enterprise/deeplinks.deeplink",
      "file": "plugins/@ionic-enterprise/deeplinks/www/deeplink.js",
      "pluginId": "@ionic-enterprise/deeplinks",
      "clobbers": [
        "IonicDeeplink"
      ],
      "runs": true
    },
    {
      "id": "@ionic-enterprise/clipboard.Clipboard",
      "file": "plugins/@ionic-enterprise/clipboard/www/clipboard.js",
      "pluginId": "@ionic-enterprise/clipboard",
      "clobbers": [
        "cordova.plugins.clipboard"
      ]
    },
    {
      "id": "cordova-plugin-moengage.MoECordova",
      "file": "plugins/cordova-plugin-moengage/www/MoECordova.js",
      "pluginId": "cordova-plugin-moengage",
      "clobbers": [
        "MoECordova"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-inappbrowser": "3.0.0",
    "cordova-plugin-request-location-accuracy": "2.3.0",
    "cordova-open-native-settings": "1.5.2",
    "cordova.plugins.diagnostic": "5.0.0",
    "com.razorpay.cordova": "0.16.1",
    "cordova-plugin-freshchat": "1.2.0",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-splashscreen": "5.0.3",
    "cordova-plugin-ionic-webview": "4.1.1",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "call-number": "0.0.2",
    "cordova-sqlite-storage": "3.3.0",
    "@ionic-enterprise/geolocation": "4.0.1",
    "@ionic-enterprise/device": "2.0.2",
    "cordova-plugin-sms-retriever-manager": "0.0.2",
    "cordova-support-android-plugin": "1.0.1",
    "cordova-plugin-idfa": "1.1.0",
    "cordova-plugin-androidx": "1.0.2",
    "cordova-plugin-androidx-adapter": "1.1.0",
    "cordova-plugin-firebasex": "6.1.0",
    "cordova-plugin-ionic": "5.4.5",
    "cordova-plugin-uniquedeviceid": "1.3.2",
    "cordova-plugin-appsflyer-sdk": "4.4.22",
    "cordova-launch-review": "3.1.1",
    "cordova-plugin-vibration": "3.1.1",
    "cordova-plugin-network-information": "2.0.2",
    "cordova-plugin-appavailability": "0.4.2",
    "@ionic-enterprise/social-sharing": "5.6.6",
    "@ionic-enterprise/deeplinks": "1.0.23",
    "@ionic-enterprise/clipboard": "1.3.2",
    "cordova-plugin-moengage": "5.0.1"
  };
});