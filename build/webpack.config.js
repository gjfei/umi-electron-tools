const path = require('path');
const resolve = url => path.resolve(__dirname, '../', url);
module.exports = {
  mode: 'production',
  target: 'electron-main',
  entry: resolve('src/main/index.ts'),
  output: {
    path: resolve('dist/electron'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
};
