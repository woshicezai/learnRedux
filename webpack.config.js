var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports= {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'static',),
    filename: 'index_bundle.js',
    // publicPath:'public' 伺服的路径
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader:'babel-loader?cacheDirectory=true'
        },
      }
    ]
  },
  devtool: "source-map",
  plugins: [new HtmlWebpackPlugin({
    title:'my website',
    template: './src/Template/template.html'
  })],
  devServer: {
    port:8088,
  }
};