//shiny objects
//very small shadows on the surface
//moving with stars

function create(){
	let chance = Math.floor(Math.random() * 10000) + 1;
	if(chance==4371){
		// 1. Create a new div element
	const newDiv = document.createElement('div');

	// 2. Set its content and styles
	newDiv.style.width = '200px';
	newDiv.style.height = '100px';
	newDiv.style.backgroundColor = 'black';
	newDiv.style.padding = '20px';
	newDiv.style.position = 'fixed';
	newDiv.style.top = '50px';
	newDiv.style.left = '50px';
	newDiv.style.zIndex = '9999';

	// 3. Append the div to the document body
	document.body.appendChild(newDiv);
	}
}

function grow(){
	//becomes bigger every day
	//cannot grow too big
	//time and size limit
}

function fade(){
	
}

function remove(){
	if(lightlevel<2){
		// 1. Find the element by its ID (or use your existing variable)
	const targetDiv = document.getElementById('my-div-id');

	// 2. Remove the element completely from the DOM and screen
	if(targetDiv){
		targetDiv.remove();
	}
	}
}

// Function that calls create() less frequently (e.g., every 3 to 6 seconds)
function scheduleCreate() {
    create();
    
    // Random interval between 3000ms and 6000ms
    const createInterval = Math.floor(Math.random() * 3000) + 3000; 
    setTimeout(scheduleCreate, createInterval);
}

// Function that calls remove() more frequently (e.g., every 1 to 2.5 seconds)
function scheduleRemove() {
    remove();
    
    // Random interval between 1000ms and 2500ms
    const removeInterval = Math.floor(Math.random() * 1500) + 1000; 
    setTimeout(scheduleRemove, removeInterval);
}