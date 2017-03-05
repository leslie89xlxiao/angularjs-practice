var path = require('path')
var webpack = require('webpack');

appPath = path.join(__dirname, 'app')
entryPath = path.join(appPath, 'entries')
distPath = path.join(__dirname, 'dist')

module.exports = {
  entry: {
    app: path.join(entryPath, 'app.js'),
    vendor: path.join(entryPath, 'vendor.js')
  },
  output: {
    path: distPath,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  }
};