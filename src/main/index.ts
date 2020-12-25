import {
  app,
  BrowserWindow
} from 'electron'
import url from 'url'
import path from 'path'
import isDev from 'electron-is-dev'

app.on('ready', () => {
  let mainWindow: BrowserWindow | null = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      contextIsolation: true
    }
  })
  mainWindow.maximize()
  // mainWindow.setAlwaysOnTop(true)
  // 设置打开的窗口大小
  if (isDev) {
    mainWindow.webContents.openDevTools()
    mainWindow.loadURL('http://localhost:3000') // 加载那个页面
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, '../../dist/umi/index.html'),
        protocol: 'file:',
        slashes: true
      }),
    )
  }
  mainWindow.on('closed', () => {
    mainWindow = null
  })
})
