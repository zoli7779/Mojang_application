// Function to handle new world creation
function createNewWorld() {
    // Get the value from the input field
    const worldNameInput = document.getElementById('worldName').value;
    
    // Check if the input is empty
    if (worldNameInput.trim() === "") {
        alert("Please enter a world name!");
        return;
    }

    // 1. Save the world name to the browser's local storage
    localStorage.setItem('currentWorld', worldNameInput);

    // 2. Redirect the player to the shared world template page
    window.location.href = "world.html";
}

//settings:superflat world, single biome, game mode etc