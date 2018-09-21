const path = require('path');
const webpack = require('webpack');

const config = {
  // mode: 'development',
  entry: {
    index:'./app/js/App.jsx'
  },
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-eval-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    chunkFilename: '[name].js',
    publicPath: '/file/widget/anotherWidget/js/',
    libraryTarget: 'amd'
  },
  externals: {
    'knockout': 'knockout',
    'jquery': 'jquery',
    'pubsub': 'pubsub',
    'ccConstants': 'ccConstants',
    'ccRestClient': 'ccRestClient',
    'navigation': 'navigation',
    'ccLogger': 'ccLogger'
  },
  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      // react: 'preact-compat',
      // 'react-dom': 'preact-compat'
    }
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
};

if (process.env.NODE_ENV === 'development') {
  config.entry.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000');
}

module.exports = config;
