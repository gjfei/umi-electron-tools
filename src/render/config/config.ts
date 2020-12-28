import { defineConfig } from 'umi'
import WebpackChain from 'webpack-chain'
import routes from './routes'

export default defineConfig({
  chainWebpack: (config: WebpackChain) => {
    return config.target('electron-renderer')
  },
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
  routes
})
