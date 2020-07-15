#!/bin/bash
echo "🔥🔥🔥 Starting android platform cleanup task 🔥🔥🔥"
echo "Removing node modules, plugins, platforms and www folder 🕐🕐🕐"
rm -rf node_modules plugins platforms www
echo "Done ✅✅✅"

echo "Removing android platform 🕐🕐🕐"
ionic cordova platform rm android
echo "Done ✅✅✅"

echo "Removing moengage from package json 🕐🕐🕐"
sed -i -e '/moengagesdk/d;' package.json || exit 1
sed -i -e '/cordova\-plugin\-moengage/{N;N;d;}' package.json || exit 1
sed -i -e 's/"@ionic-enterprise\/clipboard": {},/"@ionic-enterprise\/clipboard": {}/g' package.json || exit 1
echo "Done ✅✅✅"

echo "Installing node modules 🕐🕐🕐"
npm i || exit 1
echo "Done ✅✅✅"

echo "Adding Android platform 🕐🕐🕐"
ionic cordova platform add android || exit 1
echo "Done ✅✅✅"

echo "Install moengage plugin 🕐🕐🕐"
ionic cordova plugin add moengagesdk --variable APP_ID="CWX5W9Z4D2393G4XAYM2NRWG" || exit 1
echo "Done ✅✅✅"

echo "Creating SuprDailyApplication.java at platforms/android/app/src/main/java/com/supr/suprdaily/ 🕐🕐🕐"
echo 'package com.supr.suprdaily;

import android.app.Application;
import com.moengage.cordova.MoECordova;
import com.moengage.core.Logger;
import com.moengage.core.MoEngage;

public class SuprDailyApplication extends Application {
  @Override public void onCreate() {
    super.onCreate();
    MoEngage moEngage = new MoEngage.Builder(this,"CWX5W9Z4D2393G4XAYM2NRWG")
                            .setNotificationSmallIcon(R.mipmap.ic_launcher)
                            .setNotificationLargeIcon(R.mipmap.ic_launcher)
                            .build();
    MoEngage.initialise(moEngage);
    MoECordova.registerNativeCallbacks();
  }
}' > platforms/android/app/src/main/java/com/supr/suprdaily/SuprDailyApplication.java || exit 1
echo "Done ✅✅✅"


echo "Creating backup_descriptor.xml at platforms/android/app/src/main/res/xml/ 🕐🕐🕐"
echo '<?xml version="1.0" encoding="utf-8"?>
<full-backup-content>
  <exclude domain="database" path="MOEInteractions"/>

  <exclude domain="sharedpref" path="pref_moe.xml"/>
</full-backup-content>' > platforms/android/app/src/main/res/xml/backup_descriptor.xml || exit 1
echo "Done ✅✅✅"


echo "Creating platforms/android/app/build-extras.gradle 🕐🕐🕐"
echo 'dependencies {
  implementation "com.moengage:moe-android-sdk:9.8.00"
  implementation "com.google.firebase:firebase-messaging:20.1.0"
}' > platforms/android/app/build-extras.gradle || exit 1
echo "Done ✅✅✅"

echo "append multidexEnabled true in /platforms/android/CordovaLib/build.gradle 🕐🕐🕐"
sed -i '' -e 's/minSdkVersion 19/minSdkVersion 19\
        multiDexEnabled true/g' platforms/android/CordovaLib/build.gradle || exit 1
echo "Done ✅✅✅"

echo "append multidexEnabled true in /platforms/android/app/build.gradle 🕐🕐🕐"
sed -i '' -e 's/applicationId privateHelpers.extractStringFromManifest("package")/applicationId privateHelpers.extractStringFromManifest("package")\
\
        multiDexEnabled true/g' platforms/android/app/build.gradle || exit 1
echo "Done ✅✅✅"


echo "Updating platforms/android/app/src/main/AndroidManifest.xml file 🕐🕐🕐"
sed -i '' -e 's/android:supportsRtl="true"/android:supportsRtl="true" android:fullBackupContent="@xml\/backup_descriptor" android:name=".SuprDailyApplication"/g' platforms/android/app/src/main/AndroidManifest.xml

sed -i '' -e '/<service android:name="org.apache.cordova.firebase.FirebasePluginMessagingService">/,/<\/service>/c\
        <service android:name="com.moengage.firebase.MoEFireBaseMessagingService">\
                <intent-filter>\
                        <action android:name="com.google.firebase.MESSAGING_EVENT" \/>\
                <\/intent-filter>\
        <\/service>\
        <receiver android:exported="true" android:name="com.appsflyer.SingleInstallBroadcastReceiver">\
                <intent-filter>\
                        <action android:name="com.android.vending.INSTALL_REFERRER" \/>\
                <\/intent-filter>\
        <\/receiver>' platforms/android/app/src/main/AndroidManifest.xml || exit 1

sed -i '' -e '/<intent-filter android:label="@string\/launcher_name">/,/<\/intent-filter>/c\
        <intent-filter android:label="@string\/launcher_name">\
                <action android:name="android.intent.action.MAIN" \/>\
                <category android:name="android.intent.category.LAUNCHER" \/>\
        <\/intent-filter>\
        <intent-filter>\
                <action android:name="android.intent.action.VIEW" \/>\
                <category android:name="android.intent.category.DEFAULT" \/>\
                <category android:name="android.intent.category.BROWSABLE" \/>\
                <data android:scheme="suprapp" \/>\
        <\/intent-filter>' platforms/android/app/src/main/AndroidManifest.xml || exit 1

echo "Done ✅✅✅"

echo "append final to String message in logError function of /platforms/android/app/src/main/java/org/apache/cordova/firebase/FirebasePlugin.java 🕐🕐🕐"
sed -i '' -e 's/String message = args.getString/final String message = args.getString/g' platforms/android/app/src/main/java/org/apache/cordova/firebase/FirebasePlugin.java || exit 1
echo "Done ✅✅✅"

echo "append final to String message and args in updateServerUninstallToken function of /platforms/android/app/src/main/java/com/appsflyer/cordova/plugin/AppsFlyerPlugin.java 🕐🕐🕐"
sed -i '' -e 's/String token = parameters.optString/final String token = parameters.optString/g' platforms/android/app/src/main/java/com/appsflyer/cordova/plugin/AppsFlyerPlugin.java || exit 1
sed -i '' -e 's/updateServerUninstallToken(JSONArray parameters, CallbackContext callbackContext)/updateServerUninstallToken(final JSONArray parameters, final CallbackContext callbackContext)/g' platforms/android/app/src/main/java/com/appsflyer/cordova/plugin/AppsFlyerPlugin.java || exit 1
echo "Done ✅✅✅"

echo "All done. Ready to build 🎉🎉🎉"