const electron = require('electron');

// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

const { Mylaps } = require("../mylaps-amb/dist");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let client;

let getTimeInterval;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 800, height: 600, backgroundColor: '#FFF' });

  // and load the index.html of the app.
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  });

  mainWindow.loadURL(startUrl);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })


  client = new Mylaps.Communicator();

  client.on('connect', (msg) => {
    
    client.getTime();

    // request the decoders rtc every 5 minutes.
    getTimeInterval = setInterval(() => {
      client.getTime()
    }, 60 * 1000)
  });

  client.on('time', (msg) => {
    mainWindow.send('amb-time', msg);
  })

  client.on('status', (msg) => {
    mainWindow.send('amb-status', msg);
  });

  client.on('passing', (msg) => {
    let message = {
      decoderId: msg.decoderId,
      passingTimeRTC: msg.passingTimeRTC ? msg.passingTimeRTC.getTime(): undefined, 
      passingTimeUTC: msg.passingTimeUTC ? msg.passingTimeUTC.getTime(): undefined, 
      signalHits: msg.signalHits, 
      signalStrength: msg.signalStrength,
      transponderId: msg.transponderId,
      transponderTemperature: msg.transponderTemperature,
      transponderVoltage: msg.transponderVoltage
  }
    mainWindow.send('amb-passing', message);
  });

  client.on('error', (msg) => {
    mainWindow.send('amb-disconnected', msg);
  });

  client.on('close', (msg) => {
    mainWindow.send('amb-disconnected', msg);
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
