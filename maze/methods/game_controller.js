function home_page(){
	
}

function new_game(){
	
}

function save_results(){
	
}

function pause(){
	//hiding the entire maze area
}

function exit(){
	
}

// Find the button and the menu in the HTML by their IDs
const gomb = document.getElementById("menuGomb");
const menu = document.getElementById("navMenu");

// Attach a click event listener to the button
gomb.addEventListener("click", function() {
    // Toggle the 'hidden' class (shows/hides the menu)
    menu.classList.toggle("hidden");
});

/*
function difficulty(){
	switch (difficulty){
		case "beginner":
			maxuthossz=32
			hozzaadando=1
			break
		case "easy":
			maxuthossz=38
			hozzaadando=0.9
			break
		case "medium":
			maxuthossz=48
			hozzaadando=0.7
			break
		case "advanced":
			maxuthossz=64
			hozzaadando=0.5
			break
		case "difficult":
			maxuthossz=88
			hozzaadando=0.4
			break 
		case "other_shape":
			maxuthossz=100
			hozzaadando=0.4
			break
	}
}

function maze_create(){
	
}

function background_music(){
	
}

function starting_figure(){
//drawing the starting figure

for(let i=0;;i++){
	for(let j=0;;j++){}
}

}

//using WASD or arrow keys

window.addEventListener('keydown', (e) => {
  // controls example (WASD or Arrow keys)
  if (e.code === 'KeyW' || e.code === 'ArrowUp') {
	//checking the tile in the target direction; movement forward is only allowed if there is no wall{
	y--}
  }
  else if(e.code==='KeyS' || e.code==='ArrowDown'){
	//if(no obstacles){
	y++
	}
  }
  else if(e.code==='KeyA' || e.code==='ArrowLeft'){
	if(x-1!=fal){
	x--
	}
  }
  else if(e.code==='KeyD' || e.code==='ArrowRight'){
	if(x+1!=fal){
	x++
	}
  }
  
});

//timer

let startTime;
let timerInterval;

function startTimer() {
  //saving the exact start time (ms):
  startTime = Date.now();

  //updating the time every 1000 ms (1 second):
  timerInterval = setInterval(() => {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000); //in seconds
    console.log(`Eltelt idő: ${elapsedTime} másodperc`);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

//maximum time limit above a certain level

let maxtimerinterval=300*1000
if(timerInterval>=maxtimerinterval)

//monsters

function spawn_monster(){
	
}

function victory(){
	if(player.x==target.x && player.y==target.y){
		
	}
	//if player reaches the outer grid
	//the player spawns in the entry (inside the maze)
	//there is an invisible barrier, so it cannot just go out, and go to the finish
}

//competing with others

//maze database
//stores players' best times, overwritten with lower values for each lap/round
//2 distinct major sections: players tables and mazes
//player ID, name, best time, map ID
//the same player ID can appear in multiple rows for different mazes
//maze section: ID, wall block, every element of the wall block is a 2-element array whose elements identify 
//the edges of the wall, 3-element coordinates */