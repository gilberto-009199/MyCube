const path     =  require('path');
const { app, BrowserWindow, ipcMain, Tray, Menu } =  require('electron');

let main;/* Janela Principal */

app.on('ready',function(){
  main = new BrowserWindow({ //Janela Principal
      title:' MyCube ',
      width:1000,
      height:700,
      minWidth:500,
      minHeight:500,
      //icon:path.join(__dirname,'images/icons/icon.ico'),
      webPreferences: {
	      experimentalFeatures: true,
          contextIsolation: false,
          nodeIntegration: true,
          preload: __dirname + '/views/renderer.js',
    }
  })
  main.loadURL(`file://${__dirname}/views/home.html`);
  main.on('ready-to-show',()=>main.show())
  main.on('close',()=>{
      main = null;
      app.quit();
  });
})
app.on('window-all-close',()=>{
  app.quit();
})


