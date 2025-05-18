// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);



const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

// Step 1: Create your base config (can be empty or have your own settings)
const baseConfig = {
  // Add custom config here if needed
};

// Step 2: Merge with React Native default config
const defaultConfig = getDefaultConfig(__dirname);
const mergedConfig = mergeConfig(defaultConfig, baseConfig);

// Step 3: Wrap with Reanimated config
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);

