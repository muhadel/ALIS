cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-apiai.Q",
    "file": "plugins/cordova-plugin-apiai/www/lib/q.js",
    "pluginId": "cordova-plugin-apiai",
    "runs": true
  },
  {
    "id": "cordova-plugin-apiai.ApiAIPlugin",
    "file": "plugins/cordova-plugin-apiai/www/ApiAIPlugin.js",
    "pluginId": "cordova-plugin-apiai",
    "clobbers": [
      "window.ApiAIPlugin"
    ]
  },
  {
    "id": "cordova-plugin-apiai.ApiAIPromises",
    "file": "plugins/cordova-plugin-apiai/www/ApiAIPromises.js",
    "pluginId": "cordova-plugin-apiai",
    "clobbers": [
      "window.ApiAIPromises"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-fcm.FCMPlugin",
    "file": "plugins/cordova-plugin-fcm/www/FCMPlugin.js",
    "pluginId": "cordova-plugin-fcm",
    "clobbers": [
      "FCMPlugin"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/ios/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
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
    "id": "cordova-plugin-ionic-webview.ios-wkwebview-exec",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/ios/ios-wkwebview-exec.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "cordova.exec"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-apiai": "1.7.4",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-fcm": "2.1.2",
  "cordova-plugin-ionic-keyboard": "2.1.2",
  "cordova-plugin-ionic-webview": "2.0.1",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});