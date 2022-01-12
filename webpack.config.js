const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  //Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js'
  },
  //webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3000,
    watchContentBase: true,
    historyApiFallback: true
  },
  //Rules of how webpack will take our files, complie & bundle them for the browser 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
        resolve: {
          extensions: [".js", ".jsx"]
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }), 
    new MiniCssExtractPlugin(),
    new ModuleFederationPlugin({
      name: "root",
      filename: "remoteEntry.js",
      remotes: {
        customersMfe: "customersMfe@http://localhost:3001/remoteEntry.js",
        reportsMfe: "reportsMfe@http://localhost:3002/remoteEntry.js",
      },
      exposes: {
        // "./react": "react",
        // "./react-dom": "react-dom",
        // "./react-router-dom": "react-router-dom",
        // "./styled-components": "styled-components",
      },
      shared: {
        // react: {singleton: true},
        // 'react-dom': {singleton: true},
      }
    }),
  
  ],
}