const webpack = require('webpack');
const config = require('../build/webpack.config.js');

const compiler = webpack(config);

compiler.run((err, stat) => {
  console.log(stat);
});
