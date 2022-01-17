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
        customersMfe: "customersMfe@https://main.dqr932o0kqlhl.amplifyapp.com/remoteEntry.js",
        reportsMfe: "reportsMfe@https://main.dg9bshiut52xv.amplifyapp.com/remoteEntry.js",
      },
      exposes: {
        // "./react": "react",
      },
      shared: {
        // react: {singleton: true},
      }
    }),
  
  ],
}