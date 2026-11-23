function create(){
	let chosen_place=Math.floor(Math.random()*(max-min+1))+min;
	monster.x=maze_array[chosen_place][0]
	monster.y=maze_array[chosen_place][1]
	//they cannot be created before a certain time
	//sometimes new monsters are created
	//random places
}

function remove(){
	let len=monster_array.length
	for(let i=0;i<len;i++){
		let remove_chance=Math.floor(Math.random()*(5-1+1))+1;
		if(remove_chance!=3){
			//remome monster 
		}
	}
	//monsters chasing player cannot be removed
	//the removal function are called more frequently than the creator
}