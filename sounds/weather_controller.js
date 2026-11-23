//there can be rain inside large continents, far from oceans
//avoiding too rare precipitation

function monitor(){
	
}

function decide(){
	
}

function create(){
	
}

//There is always some kind of weather; for instance, if it rains, the humidity increases as well.
//It is a continuous system where certain states trigger others, which in turn trigger even more.

//Cycle: sunshine -> water level of lakes and rivers drops (sea and ocean levels do not, but evaporation occurs above them) 
//-> cloud formation -> rain/snow -> clouds dissipate -> sunshine (new cycle)

//influencing factors: climate, proximity to the ocean

//mirage: air layers of different densities

//hail during convective air currents

export function weather(){
	import * as sunshine from './sunlight/sunlight.js'
	import * as rain from './rain/rainfall_controller.js'
	import * as hailstorm from './hailstorm/hailstorm_controller.js'
	import * as snow from './snow/snowfall_controller.js'
	import * as rainbow from './rainbow/rainbow_controller.js'
	import * as sleet from './sleet/sleet_controller.js'
	import * as wind from './wind/wind_controller.js'
	import * as tornado from './tornado/tornado.js'
	import * as tsunami from './tsunami/tsunami_controller.js'
	import * as cloud from './cloud/cloud_controller.js'
	import * as fog from './fog/fog_controller.js'
	import * as humidity from './humidity/humidity_controller.js'
	import * as mirage from './mirage/mirage_controller.js'
}