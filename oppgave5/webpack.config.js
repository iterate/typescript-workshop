const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  devServer: {
    hot: true,
    inline: true,
    compress: true,
    port: 3333
  },
  devtool: 'eval',
  entry: './src/index.tsx',
  output: {
    path: __dirname + 'oppgave5/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['awesome-typescript-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'TypeScript Workshop', template: 'src/index.html' }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
