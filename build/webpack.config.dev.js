const webpack = require('webpack')
const { merge: webpackMerge } = require('webpack-merge')

const baseConfig = require('./webpack.config.base')

module.exports = webpackMerge(baseConfig, {
  mode: 'development',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    })
  ]
})
