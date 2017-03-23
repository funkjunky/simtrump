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
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.(png|jpg|wav|mp3)$/,
        loaders: ['url?limit=100000'],
        include: path.resolve(__dirname, 'assets')
      },
    ]
  }
};
