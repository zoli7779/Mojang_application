function create(){
	
}

function karst(){
	//most common cave type 
	//water movement, and steepness
	//if there are not enough mountains in the region, they can generate (sometimes surface openings) anywhere in the soil
	//there are sources
	//sometimes cave systems, multiple sources close to each other
}

function water_movement(){
	let directions=[[0,-1],[-1,0],[0,1],[1,0]]  //up, left, down, right
	//default:circular spread
	//the heght from where it fell
	//the surface 
	//water volume per second
	//original point
	//layers 
	//layers by radius
	
	for(let i=0; i<actuallayerlength;i++){
		for(let k=0; k<4; k++){
			if(actuallayer[i]!==solid){
				nextlayer
			}
		}
	}
	//deleting elements
	actuallayer=[]
	//inserting new elements
	for(let i=0;i<nextlayerlength;i++){
		actuallayer[i]=nextlayer[i]
	}
	//deleting elements
	nextlayer=[]	
}

function water_destruction(){
	//the direction where the water moves, it can break small parts of the rock, and bring it with itself
	//if the water slows down enough, it can emit the rock particle
	//weaker rock spots are more likely to get broken
	//water movement vector ->the direction of force applied by the water to the rock
	//the rock also applies force to the water 
	//softer rocks
	//a simplification:there is a small chance of breaking the block every second
}

function dripstone_formation(){
	//water containing particles 
	//specific places/condition
	//lots of driptones in a given place
}

function living_organisms(){
	//bats
	
	//bats normally generates in groups
	
	let batnumber=Math.floor(Math.random() * 20) + 1;
	
	//insects
	//fungi
}