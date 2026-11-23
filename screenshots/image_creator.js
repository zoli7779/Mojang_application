function takeScreenshot() {
    //You can select the entire document (document.body) or a unique element as well (e.g., by id)
    html2canvas(document.body).then(canvas => {
        // (Base64 PNG)
        const imageURL = canvas.toDataURL("image/png");

        // downloading
        const link = document.createElement("a");
        link.href = imageURL;
        link.download = "kepernyokep.png";
        link.click();
    });
}

//after pressing the proper key combination
//a short pause during the game
//different names for each screenshot, using the current Date
//avoiding name collisions