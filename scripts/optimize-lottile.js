import fs from "fs-extra";

// Function to optimize Lottie JSON
async function optimizeLottie(filePath) {
  try {
    // Read the Lottie JSON file
    const lottieData = await fs.readJson(filePath);

    // Perform optimization (e.g., remove unused assets, compress data)
    const optimizedData = optimizeData(lottieData);

    // Write the optimized JSON back to the same file
    await fs.writeJson(filePath, optimizedData, { spaces: 0 });

    console.log(`Optimized Lottie JSON saved to ${filePath}`);
  } catch (error) {
    console.error("Error optimizing Lottie JSON:", error);
  }
}

// Function to perform data optimization
function optimizeData(data) {
  // Example optimization: remove unused assets
  if (data.assets) {
    data.assets = data.assets.filter(
      (asset) => asset.layers && asset.layers.length > 0
    );
  }

  // Additional optimizations can be added here

  return data;
}

// Main function to run the script
async function main() {
  const args = process.argv.slice(2);

  if (args.length < 1) {
    console.error("Please provide the file path.");
    console.error("Usage: node scripts/optimize-lottile.js <filePath>");
    process.exit(1);
  }

  const [filePath] = args;

  await optimizeLottie(filePath);
}

main();
