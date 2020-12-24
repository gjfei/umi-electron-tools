/**
 * webpack 构建
 */
const webpack = require('webpack');
const chalk = require('chalk');
const config = require('../build/webpack.config.dev');

const compiler = webpack(config);
const TAG = '[script/startApp.js]';

compiler.hooks.beforeCompile.tap(TAG, (arg0) => {
  console.log(TAG, chalk.yellow('Electron webpack 开始构建'));
});

compiler.watch({

},(err, stats) => {
  if (err) {
    // err 对象将只包含与webpack相关的问题，例如错误配置等
    console.log(TAG, chalk.red('💥 Electron webpack 相关报错'));
  } else if (stats.hasErrors()) {
    // webpack 编译报错
    const json = stats.toJson('errors-only');
    console.log(TAG, json.errors);
    console.log(TAG, chalk.red('💥 Electron 构建报错'));
  } else {
    console.log(TAG, chalk.green('Electron webpack 构建完成'));
  }
});