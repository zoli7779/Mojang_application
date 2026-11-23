const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    saveScreenshot: (imageURL) => ipcRenderer.send('save-screenshot', imageURL),
    onScreenshotSaved: (callback) => ipcRenderer.on('screenshot-saved', (event, data) => callback(data))
});