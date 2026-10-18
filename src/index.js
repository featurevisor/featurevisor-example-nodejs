/**
 * Import Featurevisor SDK
 */

// If you are using `.mjs` files or have `type: module` in your `package.json`, you can use `import` syntax.
import { createFeaturevisor } from "@featurevisor/sdk";

// Otherwise, use `require` syntax:
// const { createFeaturevisor } = require("@featurevisor/sdk");

/**
 * Constants
 */
const DATAFILE_URL =
  "https://featurevisor-example-cloudflare.pages.dev/production/featurevisor-tag-all.json";

/**
 * Main
 */
async function main() {
  const response = await fetch(DATAFILE_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch datafile: HTTP ${response.status}`);
  }

  const datafileContent = await response.json();

  const f = createFeaturevisor({
    datafile: datafileContent,
    context: {
      userId: "123",
    },
  });

  try {
    const featureKey = "my_feature";

    const isEnabled = f.isEnabled(featureKey);

    console.log(`Feature "${featureKey}" is ${isEnabled ? "enabled" : "disabled"}`);
  } finally {
    await f.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
