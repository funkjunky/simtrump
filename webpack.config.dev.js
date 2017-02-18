var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
	'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
    resolve: {fallback: path.join(__dirname, 'node_modules')},
    resolveLoader: {fallback: path.join(__dirname, 'node_modules')},
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
          loader: 'babel-loader',
          query: {
              presets: ['es2015', 'stage-0', 'react'].map(dep => require.resolve(`babel-preset-${dep}`)),
              plugins: [
                        'transform-runtime',
              ].map(dep => require.resolve(`babel-plugin-${dep}`)).concat(['react-hot-loader/babel'])
          }
      },
      {
        test: /\.(png|jpg|wav|mp3)$/,
        loaders: ['url?limit=100000'],
        include: path.join(__dirname, 'assets')
      },

      // pixi uses fs.readFileSync and require()s json files
      {
        test: /\.js$/,
        loaders: ['transform?brfs'],
        include: /node_modules/
      },
      {
        test: /\.json$/,
        loaders: ['json']
      }
    ]
  }
};
