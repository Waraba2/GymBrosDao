import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x480410E038065567C8c003FA44bca6f99eB6377E",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Deadlifting Froggy",
        description: "This NFT will give you access to GYMBROSDAO!",
        image: readFileSync("scripts/assets/GymBros.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()