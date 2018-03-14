import webpack from 'webpack';

export default {
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
