var path = require('path')
var Webpack = require('webpack')

module.exports = {
  entry: './full_demo/main.jsx',
  module: {
    loaders: [
      {
        test: /.*\.jsx$/,
        loaders: [
          'babel?cacheDirectory,presets[]=react,presets[]=es2015'
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
    new Webpack.NoErrorsPlugin()
  ],
  stats: {
    // Nice colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map'
}
