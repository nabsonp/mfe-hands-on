const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const webpack = require("webpack");
require('dotenv').config();

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "nabstore",
    projectName: "mfe-products",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    externals: ["styled-components"],
    plugins: [
      new webpack.EnvironmentPlugin(['API_BASE_URL']),
      new webpack.EnvironmentPlugin(['SERVICE_PRODUCTS_BASE_URL']),
    ],
  });
};
