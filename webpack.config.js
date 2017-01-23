/* global __dirname */

const path = require('path');

module.exports = {
  context: __dirname,
  entry: './js/App.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    loaders: [{
      include: path.resolve(__dirname, 'js'),
      test: /\.jsx?$/,
      loader: 'babel-loader',
      query:
      {
        presets:['react', ['es2015', {'modules': false, 'loose': true}]]
      }
    }
    ]
  }
};
