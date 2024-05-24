import { AppStoreServerAPIClient, Environment } from "@apple/app-store-server-library";
import fs from 'fs';

const issuerId = "ac256936-b294-4856-9bb2-fd0edbfe1d33"
const keyId = "4X4DAUH7SH"
const bundleId = "com.toeitechno.jkt48pm.ios"
const encodedKey = fs.readFileSync("./assets/SubscriptionKey_4X4DAUH7SH.p8")
const environment = Environment.SANDBOX

const client = new AppStoreServerAPIClient(encodedKey, keyId, issuerId, bundleId, environment)

try {
    const response = await client.requestTestNotification()
    console.log(response)
} catch (e) {
    console.error(e)
}