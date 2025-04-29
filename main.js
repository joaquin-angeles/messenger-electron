const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
        },
        autoHideMenuBar: true,
        frame: false,
    });

    win.loadURL('https://www.messenger.com');
    win.webContents.on('dom-ready', () => {
        win.webContents.insertCSS(`
::-webkit-scrollbar {
width: 8px;
height: 8px;
}

::-webkit-scrollbar-thumb {
background-color: rgba(68, 68, 68);
border-radius: 4px;
border: 2px solid transparent;
}

::-webkit-scrollbar-thumb:hover {
background-color: rgba(102, 102, 102);
}
body {
overflow: auto;
padding-right: 2px;
}
`);
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
