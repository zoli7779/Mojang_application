const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // Security bridge between renderer and main
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

// --- IMAGE ARRIVES FROM FRONTEND AND SAVING HAPPENS HERE ---
ipcMain.on('save-screenshot', async (event, imageURL) => {
    // Remove the base64 Data-URL header
    const base64Data = imageURL.replace(/^data:image\/png;base64,/, "");

    // Save automatically to a specific custom folder (e.g., Documents/MyGameApp/Screenshots)
    const targetDir = path.join(app.getPath('documents'), 'MyGameApp', 'Screenshots');
    
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true }); // Create directory if it does not exist
    }

    const fileName = `screenshot_${Date.now()}.png`;
    const filePath = path.join(targetDir, fileName);

    fs.writeFile(filePath, base64Data, 'base64', (err) => {
        if (err) {
            console.error("Error saving the image:", err);
            event.reply('screenshot-saved', { success: false, error: err.message });
        } else {
            console.log("Image successfully saved to:", filePath);
            event.reply('screenshot-saved', { success: true, path: filePath });
        }
    });
});