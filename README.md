# eddystone-chrome-apps-demo
Chrome App that advertises a different URL depending on the image.
Uses the Eddystone Advertising library available [here](https://github.com/google/eddystone/tree/master/libraries/javascript/eddystone-advertising).

# BLE Advertising Availability
BLE Advertising is only available in Single App Kiosk Mode.

For *development* you should turn on the `enable-ble-advertising-in-apps`
flag in `chrome://flags/#enable-ble-advertising-in-apps`. This will let
the app Advertise without being in Kiosk Mode.

For *deployment* you should add the following to manifest.json:
```js
"kiosk_enabled": true,
"kiosk_only": true
```
