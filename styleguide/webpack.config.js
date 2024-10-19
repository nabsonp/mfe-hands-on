const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "nabstore",
    projectName: "styleguide",
    webpackConfigEnv,
    argv,
  });

  return webpackMerge.merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    externals: ["styled-components"],
  });
};
