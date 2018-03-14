var webpack = require('webpack');

module.exports = {
  distDir: 'dist',
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __DEV__: dev
      })
    );

    return config;
  }
};
