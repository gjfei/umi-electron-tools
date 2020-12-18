const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const concurrently = require('concurrently');

const envConfig = dotenv.parse(fs.readFileSync(path.resolve(__dirname, '../.env')));
concurrently([
  { command: 'ts-node ./src/main/script/build.js', name: 'electron:build' },
  { command: 'umi dev', name: 'web:dev', env: envConfig },
  {
    command: `wait-on http://localhost:${envConfig.PORT} && electron .`,
    name: 'electron',
  },
]);
