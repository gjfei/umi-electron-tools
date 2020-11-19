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
  routes: [{ path: '/', component: '@/pages/index' }],
});
