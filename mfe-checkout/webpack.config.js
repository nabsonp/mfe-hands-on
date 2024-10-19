const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const webpack = require("webpack");
require('dotenv').config();

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "nabstore",
    projectName: "mfe-checkout",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["styled-components"],
    plugins: [
      new webpack.EnvironmentPlugin(['API_BASE_URL']),
      new webpack.EnvironmentPlugin(['SERVICE_CHECKOUT_BASE_URL']),
    ],
  });
};
