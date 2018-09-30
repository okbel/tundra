const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const extensions = [".ts", ".tsx", ".js"];

export default {
  title: "Tundra UI",
  source: "./src",
  typescript: true,
  host: "0.0.0.0",
  port: 3000,
  modifyBundlerConfig: config => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        require.resolve("style-loader"),
        {
          loader: require.resolve("css-loader"),
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName:
              process.env.NODE_ENV === "production"
                ? "[hash:base64]"
                : "[name]-[local]-[hash:base64:5]"
          }
        },
        {
          loader: require.resolve("postcss-loader"),
          options: {
            config: {
              path: "./postcss.config"
            }
          }
        }
      ]
    });
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        extensions,
        configFile: "./tsconfig.json"
      })
    ];
    return config;
  }
};
