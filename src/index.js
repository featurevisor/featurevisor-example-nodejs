/**
 * Import Featurevisor SDK
 */

// If you are using `.mjs` files or have `type: module` in your `package.json`, you can use `import` syntax.
import { createInstance } from "@featurevisor/sdk";

// otherwise, use `require` syntax
// const { createInstance } = require("@featurevisor/sdk");

/**
 * Constants
 */
const DATAFILE_URL =
  "https://featurevisor-example-cloudflare.pages.dev/production/datafile-tag-all.json";

/**
 * Main
 */
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
