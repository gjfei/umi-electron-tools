const path = require('path')
const Dotenv = require('dotenv-webpack')
const pathResolve = (dir = '') => path.join(__dirname, '..', dir) // 指向 src/main
module.exports = {
  mode: 'production',
  target: 'electron-main',
  entry: pathResolve('index.ts'),
  output: {
    path: pathResolve('../../dist/electron'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [new Dotenv()]
}
