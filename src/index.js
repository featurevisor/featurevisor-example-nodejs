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
  "https://featurevisor-example-cloudflare.pages.dev/production/featurevisor-tag-all.json";

/**
 * Main
 */
async function main() {
  const datafileContent = await fetch(DATAFILE_URL)
    .then((res) => res.json());

  const f = createInstance({
    datafile: datafileContent,
    context: {
      userId: "123"
    }
  });

  const featureKey = "my_feature";

  const isEnabled = f.isEnabled(featureKey);

  console.log(`Feature "${featureKey}" is ${isEnabled ? "enabled" : "disabled"}`);
}

main();
