import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

export default {
  entry: {
    server: './server.js'
  },
  output: {
    filename: './[name].prod.js'
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
