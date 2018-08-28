# app.neomad.org

Mobile geolocation app built to enhance position reliability for neomad.org users.

## Install

app.neomad.org is built with [react-native](https://facebook.github.io/react-native/)

Just run `npm install`.

On MacOSX, after installing [XCode](https://developer.apple.com/xcode/), run the following command to bundle IOS dependency files:

```
npx react-native bundle --dev false --platform ios --entry-file index.js --bundle-output ios/main.jsbundle --assets-dest ./ios
```

## Commands

### To run your app on iOS with the command line

```
npm run build-ios
```

### To run your app on iOS with the graphical interface

Open _ios/app.xcodeproj_ in Xcode and hit the Run button.

### To run your app on Android

Install an Android emulator running (quickest way to get started), or a device connected, then run `npm run build-android`.
