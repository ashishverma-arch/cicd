const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      "http": require.resolve("stream-http")
    }
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
