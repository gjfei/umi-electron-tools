const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const concurrently = require('concurrently');

const envConfig = dotenv.parse(fs.readFileSync(path.resolve(__dirname, '../.env.production')));
concurrently([
  { command: 'ts-node ./src/main/script/build.js', name: 'electron:build',env: envConfig },
  { command: 'umi build', name: 'web:build', env: envConfig },
  {
    command: 'wait-on ./dist/electron/index.js && electron-builder',
    name: 'build',
    env: envConfig
  },
]);