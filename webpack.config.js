const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");
const ROOT_PATH = path.dirname(require.main.filename);
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
    entry: './client/index.js',
    target: 'node',
    mode: process.env.NODE_ENV,
    output: {
      path: path.join(__dirname, 'build'),
      publicPath: '/build/',
      filename: "bundle.js"
    },
    
  module: { 
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        },    
    },
    {
      test: /\.s[ac]ss$/i,
      exclude: /node_modules/,
      // exclude:
      use: ["style-loader", "css-loader", "sass-loader"],
    },
      {
        test: /css$/i,
        use: ["style-loader", "css-loader"],
      },
    //   {
    //     test: /\.(png|jpe?g|gif)$/i,
    //     use: [
    //       {
    //         loader: "file-loader",
    //       },
    //     ],
    //   },
        
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    })
  ],
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    //contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    publicPath: "/build/",
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000',
    }
  }
}