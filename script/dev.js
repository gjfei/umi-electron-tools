const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const concurrently = require('concurrently');

const config = require('../build/webpack.config.js');

const envConfig = dotenv.parse(
  fs.readFileSync(path.resolve(__dirname, '../.env')),
);

const compiler = webpack(config);

compiler.watch({}, (err, stat) => {
  if (err) {
    console.log(err);
  } else {
    concurrently([
      { command: 'umi dev', name: 'dev', env: envConfig },
      {
        command: `wait-on http://localhost:${envConfig.PORT} && electron .`,
        name: 'electron',
      },
    ]);
  }
});
