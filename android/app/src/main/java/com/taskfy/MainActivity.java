package com.taskfy;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }

  @Override
  protected String getMainComponentName() {
    return "Taskfy";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        DefaultNewArchitectureEntryPoint.getFabricEnabled(), // fabricEnabled
        DefaultNewArchitectureEntryPoint.getConcurrentReactEnabled() // concurrentRootEnabled
        );
  }
}
