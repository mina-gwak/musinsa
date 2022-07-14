const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/addon-controls",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      "node_modules",
      "styles",
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      "@assets": path.resolve(__dirname, "../src/assets"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@constants": path.resolve(__dirname, "../src/constants"),
      "@data": path.resolve(__dirname, "../src/data"),
      "@hooks": path.resolve(__dirname, "../src/hooks"),
      "@mocks": path.resolve(__dirname, "../src/mocks"),
      "@pages": path.resolve(__dirname, "../src/pages"),
      "@query": path.resolve(__dirname, "../src/query"),
      "@router": path.resolve(__dirname, "../src/router"),
      "@store": path.resolve(__dirname, "../src/store"),
      "@type": path.resolve(__dirname, "../src/type"),
      "@utils": path.resolve(__dirname, "../src/utils"),
    };
    return config;
  },
};
