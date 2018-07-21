const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist/src/'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, './dist/'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: path.join(__dirname, './public/'),
      to: path.join(__dirname, './dist/')
    }, {
      from: path.join(__dirname, './assets/'),
      to: path.join(__dirname, './dist/assets/')
    }])
  ]
};
