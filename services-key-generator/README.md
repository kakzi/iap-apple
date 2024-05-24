# How to install

## 1. Install dependencies
```
yarn install
```

## 2. Generate keys

### App store Connect API
https://developer.apple.com/documentation/appstoreconnectapi

For App store Connect APIs you will need a key created under App Store Connect API

### App Store Server Api
https://developer.apple.com/documentation/appstoreserverapi

For App Store Server Api you will need a key created under In-App Purchase

![How to generate keys](./how-to-create-keys.png?raw=true "How to generate keys")

### 3. Create `./keys folder and add private keys there

### 4. Create keys.js and add keys info there 

```

export default {

    'issuerId': 'xxxx-xxxx-xxxx-xxxx-xxx',
    'bundleId': 'com.toninichev.Blue.InAppPurchaseTutorial',

    // keys for App store Connect API
    'appStoreContentKeyId': 'xxxxxxxx',
    'appStoreContentPrivateKeyFileLocation': './keys/AuthKey_xxxxx.p8',

    // keys for App Store Server Api
    'inAppPurchaseKeyId': 'xxxxxxx',
    'inAppPurchasePrivateKeyFileLocation': './keys/SubscriptionKey_xxxx.p8',

}
```
