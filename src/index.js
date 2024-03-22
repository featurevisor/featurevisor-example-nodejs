// import { createInstance } from "@featurevisor/sdk";
const { createInstance } = require("@featurevisor/sdk");

const DATAFILE_URL =
  "https://featurevisor-example-cloudflare.pages.dev/production/datafile-tag-all.json";

async function main() {
  const f = createInstance({
    datafileUrl: DATAFILE_URL,
    onReady: function () {
      console.log("Featurevisor SDK is ready");
    },
  });

  await f.onReady();

  const featureKey = "my_feature";
  const context = { userId: "123" };

  const isEnabled = f.isEnabled(featureKey, context);

  console.log(`Feature "${featureKey}" is ${isEnabled ? "enabled" : "disabled"}`);
}

main();
