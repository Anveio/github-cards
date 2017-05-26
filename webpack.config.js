const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const typescript = { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
const javascript = { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
const css = { test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap') }

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname + "/public/dist",
    publicPath: '/',
    filename: "bundle.js",
  },
  plugins: [
    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin('[name].[contenthash].css'),

    new HtmlWebpackPlugin({}),

    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [ typescript, javascript, css ]
  },
}