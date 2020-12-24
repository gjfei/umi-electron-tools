const webpack = require('webpack')
const { merge: webpackMerge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')

const baseConfig = require('./webpack.config.base')

module.exports = webpackMerge(baseConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin()
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    })
  ]
})
