const path = require('path')
const Dotenv = require('dotenv-webpack')
module.exports = {
  mode: 'production',
  target: 'electron-main',
  entry: path.resolve('./src/main/index.ts'),
  output: {
    path: path.resolve('./dist/electron'),
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
