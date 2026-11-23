//The base ratio is set to 1:1.41 for scaling and dimensions.
//gameplay images

//placed in a pile initially
//randomized positioning inside a circular boundary (overlapping allowed)
//generating border pieces first with 4 to 8 standard configurations using binary random values (0 or 1)
//when all pieces are in place, display the original image and apply smoothing
//you can use your own image, generate one, capture a photo, or use a GeoGebra-like interface
//image slicing algorithm with simultaneous piece identification and neighbor mapping

let illesztes;
let darabszam=0
let kirakodarabmagassag
let kirakodarabszelesseg
const darabtomb=[[id,x,y,elsoid,csatlakozasi_pont,masodikid,csatlakozasi_pont,harmadikid,csatlakozasi_pont,negyedikid,csatlakozasi_pont],...]

let border_array=[]

let lengthh=border_array.length

for(let i=0;i<lengthh;i++){
	
}
let previous_layer=[]

let current_layer=[]

let next_layer=[]

let direction_array=[[0,-1],[-1,0],[0,1],[1,0]]

for(let i=0;i<4;i++){
	
}

//an array containing the boundary vectors (coordinates)
//with this, the boundary of the puzzle is complete
//traversing the interior of the puzzle, always moving one step at a time
//traversing all 4 directions for each piece
//cannot go beyond the border

let tavolsag=(x1-x2)**2+(y1-y2)**2
if(tavolsag=<2){
	//moving the assembled puzzle toward the other one
}

//numbering pieces 


for(let j=0;j<(szelesseg-1);j++){
	for(let i=0;i<magassag;i++){
		illesztes = Math.round(Math.random())
		if(illesztes==0){
			darabtomb[j][i][k]=0
		}
		else{
			darabtomb
		}
	}
}

//During slicing, 50% probability for a tab (connector) and 50% probability for a blank (hole).

let slice = Math.floor(Math.random()*2)

//mixing algorithm

function mix(){
	//first: random places
	//then magnetism mechanism
}

function turn(){
	// 50% chance of showing the back side of a piece of puzzle
}