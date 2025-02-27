const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const concurrently = require('concurrently');

const envConfig = dotenv.parse(fs.readFileSync(path.resolve(__dirname, '../.env')));

concurrently([
  {
    command: 'ts-node ./script/startApp.js',
    name: 'electron:build',
    env: envConfig
  },
  {
    command: 'umi dev',
    name: 'web:dev',
    env: envConfig
  },
  {
    command: `wait-on ${envConfig.ELECTRON_MAIN} ${envConfig.UMI_MAIN} && nodemon --watch ${envConfig.ELECTRON_MAIN} --exec electron .`,
    name: 'electron',
    env: envConfig
  },
]);
