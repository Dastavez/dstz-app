package com.supr.suprdaily;

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
}
