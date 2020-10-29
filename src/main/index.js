const { app, BrowserWindow } = require('electron'); //引入electron模块

app.on('ready', () => {
  const mainWindow = new BrowserWindow({ width: 400, height: 400 }); //设置打开的窗口大小
  mainWindow.loadURL('http://localhost:3000'); //加载那个页面
  //监听关闭事件，把主窗口设置为null
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
