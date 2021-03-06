package com.rnlive;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.rnlive.module.SharePackage;
import com.umeng.socialize.Config;
import com.umeng.socialize.PlatformConfig;
import com.umeng.socialize.UMShareAPI;
import com.umeng.commonsdk.UMConfigure;
import com.remobile.marqueeLabel.RCTMarqueeLabelPackage;
import com.psykar.cookiemanager.CookieManagerPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.ksyun.media.reactnative.ReactKSYVideoPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RCTMarqueeLabelPackage(),
            new CookieManagerPackage(),
            new LinearGradientPackage(),
            new ReactKSYVideoPackage(),
              new SharePackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    Config.shareType = "react native";  
      UMConfigure.init(this,"5bee76e9f1f5567de8000068","umeng",UMConfigure.DEVICE_TYPE_PHONE,"");
  }
  {  
      PlatformConfig.setWeixin("wx083bf496cbc48aec", "750e9075fa521c82274a9d548c399825");
      PlatformConfig.setQQZone("1106207359", "3JjbG8aXMuh5w0sV");  
      PlatformConfig.setSinaWeibo("2733400964", "fac50980a44e3e3afd4bc968ea572887", "www.baidu.com"); 
    } 
}
