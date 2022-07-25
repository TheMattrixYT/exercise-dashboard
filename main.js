const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

// waiting for app to be ready
app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 1600,
        height: 900
    });
    // load html
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'main.html'),
        protocol: 'file:',
        slashes: true
    }));
});

app.on('closed', () => {
    mainWindow = null;
})