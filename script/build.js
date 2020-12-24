const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const concurrently = require('concurrently');

const envConfig = dotenv.parse(fs.readFileSync(path.resolve(__dirname, '../.env.production')));

concurrently([
  {
    command: 'ts-node ./script/buildApp.js',
    name: 'electron:build',
    env: envConfig
  },
  {
    command: 'umi build',
    name: 'web:build',
    env: envConfig
  },
  {
    command: `wait-on ${envConfig.ELECTRON_MAIN} ${envConfig.UMI_MAIN} && electron-builder`,
    name: 'build',
    env: envConfig
  },
]);