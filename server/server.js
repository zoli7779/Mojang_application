// Global variables for managing LAN connection
let generatedLanCode = ""; 
let isLanShared = false;

// 1. Triggered when the host creates the world
function hostGame() {
    console.log("World created locally. Ready to be shared.");
    // Return a message or status back to the frontend if needed
    return "World created successfully!";
}

// 2. Triggered when the host clicks the "Share to LAN" button on the other page
function shareToLan() {
    // Generate a 5-digit random code (between 10000 and 99999)
    generatedLanCode = Math.floor(10000 + Math.random() * 90000).toString();
    isLanShared = true;

    console.log("LAN code generated:", generatedLanCode);
    
    // Return the code so the frontend can display it to the user
    return generatedLanCode;
}

// 3. Triggered when the guest tries to join using the code
function joinGame(enteredCode) {
    // Check if the host has shared the game to LAN yet
    if (!isLanShared) {
        return { success: false, message: "Error: The host has not shared the game to LAN yet!" };
    }

    // Check if the entered code matches the generated code
    if (enteredCode !== generatedLanCode) {
        return { success: false, message: "Error: Invalid LAN code! Please check and try again." };
    }

    // If everything matches, connection is successful
    console.log(`Successfully connected with code: ${enteredCode}!`);
    return { success: true, message: "Successfully connected to the game!" };
}