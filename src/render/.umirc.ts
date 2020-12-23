import { defineConfig } from 'umi';
export default defineConfig({
  favicon: 'favicon.ico',
  base: './',
  publicPath: './',
  history: {
    type: 'hash',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  outputPath: '../../dist/umi',
  routes: [{ path: '/', component: '@/pages/index' }],
  chainWebpack: config => {
    config.target('electron-renderer')
  }
});
