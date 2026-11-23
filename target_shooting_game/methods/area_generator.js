let magassag=[-5,10]
let szelesseg=[-15,15]
let hossz=[0,100]
let koordinatatomb=[0,0,0]

for(let i=0; i<celpontszam;i++){
	for(let u=0;u<3;u++){
		koordinatatomb[u]=Math.random()
	}
}

let shapes=[circle,cone,cone_frustum,cuboid,cylinder,ellipse,ellipsoid,polygon,pyramid,sphere,square,triangle,truncated_pyramid]

function shape_function(){
	let hossz=shapes.length
	let melyik=Math.floor(Math.random()*(hossz-0+1))+0
	//sphere size of the shape
}

function decide(){
	//creating shapes in certain places
}

function create_shape(){
	
}

function initial_rotation(){
	
}