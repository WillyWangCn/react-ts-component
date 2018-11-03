/*** webpack.config.js ***/
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "../examples/src/index.html"),
  filename: "./index.html"
});
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "../examples/src/index.tsx"),
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "awesome-typescript-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
};
