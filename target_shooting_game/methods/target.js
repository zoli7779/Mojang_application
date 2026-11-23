function starting_point(){
	//where it was hit
}

function spherical_disappearance(){
	
}

//determining if it got hit by a projectile
//only one target can be shot

function target_remove(){
	//it starts disappearing from the place where it was shot
	//spherical disappearance
	//the process should be fast enough to handle target movement
	//the center of the damage point moves
	//plain transformation
	//it may happen that if the player shots too often, it can hit target which are not completely removed
	while(is_not_completely_removed){
		const iranymatrix=[[0,-1,0],[-1,0,0],[0,1,0],[1,0,0],[0,0,1],[0,0,-1]]
		let tavolsag=Math.sqrt(((aktualisx-kozx)**2)+((aktualisy-kozy)**2)+((aktualisz-kozz)**2))
		for(let i=0;i<6;i++){}
	}
}