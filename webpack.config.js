var path = require('path')
var Webpack = require('webpack')

module.exports = {
  entry: './demo/main.jsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /.*\.jsx$/,
        loaders: [
          'babel-loader?cacheDirectory,presets[]=react,presets[]=es2015'
        ],
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: __dirname,
    filename: './build/bundle.js'
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    // Avoid publishing files when compilation fails
    new Webpack.NoEmitOnErrorsPlugin()
  ],
  stats: {
    // Nice colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map'
}
