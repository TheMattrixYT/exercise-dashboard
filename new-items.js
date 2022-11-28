const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let newItem;

// waiting for app to be ready
app.on('ready', function() {
    newItem = new BrowserWindow({
        width: 800,
        height: 600
    });
    // load html
    newItem.loadURL(url.format({
        pathname: path.join(__dirname, 'new-item.html'),
        protocol: 'file:',
        slashes: true
    }));
});

app.on('closed', () => {
    newItem = null;
});