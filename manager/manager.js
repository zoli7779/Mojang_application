/*

The system operates as an interconnected, complex network—for example, certain rocks can transform into other 
types over time under pressure. These processes are interdependent: there is no such thing as an isolated volcanic 
eruption without an accompanying earthquake, rainfall moistens the soil, and lake water levels rise accordingly.

This file is what links these systems together.

start screen
loading screen
main game
mini-games option
benefits of mini-games

for the main game:
either Hungary or a random world
world creation

super flat world, for example, where river and lake generation is disabled

circular world generation around the player's starting position, true circle

terrain generation
climate
rock types
waters (ocean, sea, river, lake)

villages

vegetation (including fungi)

animals

weather

times of day, seasons

statistics system

respawn upon death except in hardcore

the goal of the game is for the player to survive as long as possible and to explore the world

//generation elements file

class protective suit

//precipitation increasing with altitude, fog
//cannot cross borders, after them a plain for 100 km, in a circle
//small chance of falling when climbing
//rockfall hazard under cliffs
//bow, crossbow
//sounds

class season

class shield

class human{}

//biomes

class unit_area{
	//elevation above sea level
	//moisture
	}

class map{
	area
}

class water_body extends unit_area{}

class grass_area extends unit_area{}

class stone_area extends unit_area{}

class building_material
class glass
class door
class roof
class window

class building
class coordinate
class sinkhole

class larger_area
class elevation
class lowland
class hilly_region
class forest
class settlement
*/

let objects = new Array(5).fill(null).map(() => []);
let current_areas=new Array(1000).fill(0).map(() => [0,0]);

let list_of_neighbours=new Array(10000).fill(0).map(() => []);

function evaporation(){}
function map_loader(){}
function plant_generator(){}
function weather(){

}

function generate
function period_of_the_day

function collapse
function sliding

function minigame(){
	//Players can choose from various games, offering both entertainment and the thrill of competing with others.
}

//player-centered camera
function loading_animation(){
	
}

//randomness
function descriptor_array_modification(betomb, hossz){
	let eselyx=0;
	let eselyy=0;
	for(let e=1;e<betomb.length-1;e++){
		eselyx=Math.floor(Math.random()*20)+1;
		eselyy=Math.floor(Math.random()*20)+1;
		switch(eselyx){
			case 1:
				betomb[e][0]++;
				break;
			case 2:
				betomb[e][0]--;
				break;
		}
		switch(eselyy){
			case 1:
				betomb[e][1]++;
				break;
			case 2:
				betomb[e][1]--;
				break;
		}
	}
}

//rendering an area (e.g., Hungary)

let grid_coordinate = Array.from({length:100},()=>Array.from({length:100},()=>Array.from({length:100},()=>new Array(2))));
//function border_renderer(tomb,xkor,ykor){}

/*

function mountain_generator
function river_generator
function lake_generator
function boundary_generator
function cave_generator
function doline_generator

*/

//function linear_function(){}

function roughness(){
	
}

function ore_generator(){
	
}

/*


*/

//inner area fill

/*

first-person / third-person view with axis-aligned world

*/

/*

multiple game modes, spectator flight, country map view, location selection, partial loading 
of the country; survival mode, starts in early summer, day length, seasons

*/

/*

function starting_weather(){}
function villages(){}
function vegetation(){}
function animals(){}

*/
/*

let new_player;

//player locomotion

*/
/*

function sunny_and_warm
function falling(){}
function descending(){}

function tree_falling
function ignore
function resume

function exit
function delete

function sand(){}

function check(){
	//cannot spawn above water
}


 //seasonal day-night cycle

//night function

*/

//Hungary();
/*

mountain placement(hegyseglista,hegyko);
create_player();

*/

//block states