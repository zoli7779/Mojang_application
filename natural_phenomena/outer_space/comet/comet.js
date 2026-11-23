//showing a moving object in the sky
//at night
//very slow movement
//every night:different places on the sky (a bit)
//rare occasions
//few comets exist, they come and go, sometimes close to each other

let comet_array=[]

function comet_frequency(){
	const min=100
	const max=300

	let time_interval=Math.floor(Math.random()*(max-min+1)+min
}

function comet_create(){
	const newcomet = document.createElement('div');

	ujDiv.style.width = '200px';
	ujDiv.style.height = '100px';
	ujDiv.style.backgroundColor = 'white';
	ujDiv.style.padding = '20px';
	ujDiv.style.position = 'fixed';
	ujDiv.style.top = '50px';
	ujDiv.style.left = '50px';
	ujDiv.style.zIndex = '9999';

	document.body.appendChild(ujDiv);
}

function comet_move(){
	//fading
}

function comet_remove(){
	if(lightlevel<2){
		ujDiv.remove();
	}
}

// Function that calls create() less frequently (e.g., every 3 to 6 seconds)
function scheduleCreate() {
    create();
    
    // Random interval between 3000ms and 6000ms
    const createInterval = Math.floor(Math.random() * 3000) + 3000; 
    setTimeout(scheduleCreate, createInterval);
}

// Function that calls move() more frequently (e.g., every 100 to 300 ms)
function scheduleMove() {
    move();
    
    // Random interval between 100ms and 300ms
    const moveInterval = Math.floor(Math.random() * 200) + 100; 
    setTimeout(scheduleMove, moveInterval);
}

// Start both independent loops
scheduleCreate();
scheduleMove();