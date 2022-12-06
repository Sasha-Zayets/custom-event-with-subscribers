const path = require('path');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = {
  mode: "production",
  devtool: "inline-source-map",
  entry: {
    main: "./src/index.ts",
  },
  plugins: [
    new RemovePlugin({
        before: {
            include: [
                './build'
            ],
        },
    }),
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};
