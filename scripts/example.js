'use strict';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.example');

const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  stats: {
    colors: true
  }
});
const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(3001, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:3001');
});