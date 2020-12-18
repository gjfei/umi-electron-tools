import { app, BrowserWindow } from 'electron';
import url from 'url';
import path from 'path';

const isDev = process.env.NODE_ENV === 'development';

app.on('ready', () => {
  let mainWindow: BrowserWindow | null = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  }); //设置打开的窗口大小

  if (isDev) {
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL('http://localhost:3000'); //加载那个页面
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, '../render/dist/index.html'),
        protocol: 'file:',
        slashes: true,
      }),
    );
  }
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
