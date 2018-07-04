const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const Path = require('path');

const publicPath = process.env.BASENAME || '/';

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: Path.resolve(__dirname, 'build'),
    compress: true,
    publicPath,
    historyApiFallback: true
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: Path.resolve(__dirname, '../src/index.html')
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: Path.resolve(__dirname, '../src'),
        enforce: "pre",
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        }
      },
      {
        test: /\.(js|jsx)$/,
        include: Path.resolve(__dirname, '../src'),
        loader: 'babel-loader',
        options: {
          plugins: [
            ['transform-react-jsx', { pragma: 'h' }]
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
});
