const electron=require('electron');
const path=require('path');
const url=require('url');
const app = electron.app;
const server = require('./server');

const BrowserWindow=electron.BrowserWindow;

app.on('ready',function() {
    mainWindow=new BrowserWindow({
      icon:'img/logo2.png',
      name:"Imprint",
      width:1280,
      height:720});
      // mainWindow.setMenu(null);

    mainWindow.loadURL(url.format({
      pathname:path.join(__dirname,'www/index.html'),
      protocol:'file:',
      slashes: true
    }));
});
