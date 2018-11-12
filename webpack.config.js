const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
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
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-3'],
            plugins: ['transform-class-properties']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
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
