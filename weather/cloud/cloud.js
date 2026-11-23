//on sky they move slowly, during movement they may change their shape a bit
//multiple layers of cloud
//preferred colors on different layers
//different sky layers
//rain clouds
//clouds not bringing rain 
//the game spawns them
//if they touch solid blocks, they can become wet
//hitting mountains->moving upwards
//constant cloud 'birth' and 'death'

export function create(intensity){
	let kezdopont
	for(let i=0;i<intensity;i++){
		let ujfelho=
		//random places around a circle
	}
}

export function move(){
	for(let i=0;i<felhotomb.length){
		for(let j=0;j<felhotomb[i].length){
			felhotomb[i][j].x+=sebesseg.x
			felhotomb[i][j].y+=sebesseg.y
			felhotomb[i][j].z+=sebesseg.z
		}
	}
	//some blocks appear or disappear at edges
	//ütközés detektálás
	
}

export function collision(){
	
}

export function fade(){
	
}

export function remove(){
	for(let i=0;i<felhotomb.length;i++){
		if(felhotomb[i].light<2){
			for(let j=0;j<felhotomb[i].length;j++){
				felhotomb[i][j].remove
			}
			//cloud removal
		}
	}
}

//flying through cloud with elytra slows down flying speed
//they move according to clouds
//sometimes they do not move
//inside them visibility reduces
//mobs / animals/ humans attacking players have reduced detection range 
//the edges of clouds are normally paler, more transparent, and brighter
//rain only falls if specific cloud is above it
//rainbow formation

function affect(){
	//reduced visibility
}