const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const concurrently = require('concurrently');
const envConfig = dotenv.parse(
  fs.readFileSync(path.resolve(__dirname, '../.env.production')),
);
concurrently([
  { command: 'umi build', name: 'build', env: envConfig },
  // {
  //   command: `wait-on http://localhost:${envConfig.PORT} && electron .`,
  //   name: 'electron',
  // },
]);
