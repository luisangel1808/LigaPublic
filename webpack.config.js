const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg|svg|ico|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'assets/[hash].[ext]' },
          },
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
            name: '[name].[ext]',
            outputPath: './assets/fonts',
            publicPath: './assets/fonts',
            esModule: false,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        REACT_APP_FIREBASE_API_KEY: JSON.stringify(process.env.REACT_APP_FIREBASE_API_KEY),
        REACT_APP_FIREBASE_AUTH_DOMAIN: JSON.stringify(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
        REACT_APP_FIREBASE_DATABASE_URL: JSON.stringify(process.env.REACT_APP_FIREBASE_DATABASE_URL),
        REACT_APP_FIREBASE_PROJECT_ID: JSON.stringify(process.env.REACT_APP_FIREBASE_PROJECT_ID),
        REACT_APP_FIREBASE_STORAGE_BUCKET: JSON.stringify(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID: JSON.stringify(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID),
        REACT_APP_FIREBASE_APP_ID: JSON.stringify(process.env.REACT_APP_FIREBASE_APP_ID),
      },
   })
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
    open: true,
  },
};
