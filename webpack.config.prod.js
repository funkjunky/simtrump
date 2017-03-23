var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel'],
      },
      {
        test: /\.(png|jpg|wav|mp3)$/,
        loaders: ['url?limit=100000'],
        include: path.join(__dirname, 'assets')
      },

      // pixi uses fs.readFileSync and require()s json files
      {
        test: /\.json$/,
        loaders: ['json']
      }
    ]
  }
};
