const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    filename: './bundle.js'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          // This settings is needed to enable blacklistUrls
          mangle: { reserved: ['sentryWrapped'] }
        }
      }),
    ]
  },
  devtool: 'inline-source-map'
};
