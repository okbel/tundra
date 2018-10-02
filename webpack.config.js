import CompressionPlugin from "compression-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";

const paths = {
  tsConfig: "./tsconfig.json",
  appSrc: "./src"
};

module.exports = {
  mode: "production",
  devtool: "source-map",
  output: {
    path: "./dist",
    filename: "[name].js",
    chunkFilename: "[name].chunk.js"
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: paths.appTsconfig,
        extensions: [".js", ".ts", ".tsx"]
      })
    ]
  },
  resolveLoader: {
    modules: ["node_modules"]
  },
  module: {
    strictExportPresence: true,
    rules: [
      { parser: { requireEnsure: false } },
      {
        test: /\.(js|ts|tsx)$/,
        enforce: "pre",
        use: [
          {
            options: {
              tsConfigFile: paths.tsConfig
            },
            loader: require.resolve("tslint-loader")
          }
        ],
        include: paths.appSrc
      },
      {
        oneOf: [
          {
            test: /\.(ts|tsx)$/,
            include: paths.appSrc,
            use: [
              {
                loader: require.resolve("babel-loader"),
                options: {
                  cacheDirectory: true
                }
              },
              {
                loader: "ts-loader",
                options: {
                  configFile: paths.tsConfig,
                  compilerOptions: {
                    target: "es2015",
                    module: "esnext",
                    jsx: "preserve",
                    noEmit: false
                  },
                  onlyCompileBundledFiles: true
                }
              }
            ]
          },
          {
            test: /\.js$/,
            include: /node_modules\//,
            use: [
              {
                loader: require.resolve("babel-loader"),
                options: {
                  presets: [
                    [
                      "@babel/env",
                      { targets: "last 2 versions, ie 11", modules: false }
                    ]
                  ],
                  cacheDirectory: true
                }
              }
            ]
          },
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: require.resolve("css-loader"),
                options: {
                  modules: true,
                  importLoaders: 1,
                  localIdentName: "[name]-[local]-[hash:base64:5]",
                  minimize: isProduction,
                  sourceMap: isProduction && !disableSourcemaps
                }
              },
              {
                loader: require.resolve("postcss-loader"),
                options: {
                  config: {
                    path: paths.appPostCssConfig
                  }
                }
              }
            ]
          },
          {
            exclude: [/\.(js|ts|tsx)$/, /\.html$/, /\.json$/],
            loader: require.resolve("file-loader"),
            options: {
              name: "assets/media/[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
          comparisons: false
        },
        mangle: {
          safari10: true
        },
        output: {
          comments: false,
          ascii_only: true
        }
      },
      sourceMap: !disableSourcemaps
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css"
    }),
    new CompressionPlugin({})
  ],
  performance: {
    hints: "warning"
  }
};
