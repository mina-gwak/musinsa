const path = require("path");

const { override, addWebpackAlias } = require("customize-cra");

module.exports = override(
  addWebpackAlias({
    "@assets": path.resolve(__dirname, "src/assets"),
    "@components": path.resolve(__dirname, "src/components"),
    "@constants": path.resolve(__dirname, "src/constants"),
    "@data": path.resolve(__dirname, "src/data"),
    "@hooks": path.resolve(__dirname, "src/hooks"),
    "@mocks": path.resolve(__dirname, "src/mocks"),
    "@pages": path.resolve(__dirname, "src/pages"),
    "@query": path.resolve(__dirname, "src/query"),
    "@router": path.resolve(__dirname, "src/router"),
    "@store": path.resolve(__dirname, "src/store"),
    "@type": path.resolve(__dirname, "src/type"),
    "@utils": path.resolve(__dirname, "src/utils"),
  })
);
