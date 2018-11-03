/*** webpack.config.js ***/
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src/index.ts"),
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
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs'
  }
};
