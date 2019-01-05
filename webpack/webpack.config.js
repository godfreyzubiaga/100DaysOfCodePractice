const webpack = require('webpack');
const path = require('path');

const buildPath = path.join(process.cwd(), 'public/js');
const clientPath = path.join(process.cwd(), 'src/client/');

const config = {
  entry: ['react-hot-loader/patch', `${clientPath}/index.jsx`],
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};

module.exports = config;
