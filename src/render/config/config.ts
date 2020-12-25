import { defineConfig } from 'umi'
import WebpackChain from 'webpack-chain'
import routes from './routes'
export default defineConfig({
  favicon: 'favicon.ico',
  base: './',
  publicPath: './',
  history: {
    type: 'hash'
  },
  nodeModulesTransform: {
    type: 'none'
  },
  outputPath: '../../dist/umi',
  chainWebpack: (config: WebpackChain) => {
    config.target('electron-renderer')
  },
  routes
})
