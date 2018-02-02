var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

var config = {
  entry: './server.js',
  output: {
    filename: './server.prod.js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  target: 'node',
  externals: [nodeExternals()]
};

module.exports = config;
