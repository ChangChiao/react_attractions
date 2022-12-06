// const CopyWebpackPlugin = require("copy-webpack-plugin");
const version = JSON.stringify(require("./package.json").version).replace(/"/g, "");
const addRewireScssLoader = require("react-app-rewire-scss-loaders");
const { addWebpackAlias } = require("customize-cra");
const path = require("path");
const basic_type = process.env.REACT_APP_BASIC_TYPE;
let info = `${basic_type}-${version}`;
module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }
  config = addRewireScssLoader("sass-resources-loader", {
    resources: ["./src/style/setting/base.scss", "./src/style/tools/all.scss"],
  })(config, env);

  config = addWebpackAlias({
    "@": path.resolve(__dirname, "./src/"),
  })(config, env);

  return config;
};
