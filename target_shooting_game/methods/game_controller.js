//moving certain targets
//projectile motion

let number_of_hits=0
let remaining_targets=0

function difficulty_select(){
	
}

function weapon_select(){
	
}

function create_targets(){
	
}

function move_targets(){
	//sometimes rotate too
}

function monitor_score(){
	
}

console.log("Usable tools: 1: bow 2: crossbow 3: stone in hand 4: sling")
let choice=parseInt(prompt("What would you use for target shooting?"),10)
let nehezseg=parseInt(prompt("Which difficulty level do you select?"),10)

switch(choice){
	case 1:
		//add bow
		//the bow has a power attribute
		//draw time
		//power drops over time while holding
		break
	case 2:
		//add crossbow
		//draw time
		//maintains power while held
		break
	case 3:
		//add stones
		break
	case 4:
		//sling
		break
	default:
		//hand with stone
}

//limited ammunition, less ammunition and more targets as difficulty increases

//target

//targets spawn in random positions without overlapping, but can align behind one another within a set range

let xpoz=Math.random()
let ypoz=Math.random()
let zpoz=Math.random()

//difficulty

//save score

//database

//a simple relational database with three core columns: player ID, name, and hit count

//competition against other players

//template targets
//target hit detection based on bullet coordinates, where the projectile trajectory intersects the target plane subset

//the entire playing field is a coordinate system

let tavolsag=Math.sqrt(Math.pow((golyo.x-kozeppont.x),2)+Math.pow((golyo.y-kozeppont.y),2))

//rectangle

//quad traversal via triangle decomposition, with shared edge handling to avoid double evaluation

//determining points using vectors
let a
let b
let c
let d
let e
let s=(a+b+c)/2
let t1=Math.sqrt(s*(s-a)*(s-b)*(s-c))

if(){}

//composite shapes

//triangulating a polygon into simple triangles for hit testing

if(talalt){
	alakzat remove
	talalatszam++
}

if(megmaradtceltabla==0){
	console.log("Congratulations! You hit all the targets. Game Over!")
}

if(ammunition==0 && megmaradtceltabla!=0){
	console.log("You missed some targets! Better luck next time!")
}