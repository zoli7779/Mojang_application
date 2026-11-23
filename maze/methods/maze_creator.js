//creating maze walls and tunnels, adding initial values   
let number_of_points=21
let number_of_squares=20
let szelsoerteke=0
let szelsoertekk=szelsoerteke+pontszam-1
let szelsoertekh=0
let szelsoertekn=szelsoertekh+pontszam-1
let pontmatrix=[]
let negyzetmatrix=[]
let max=0

//on advanced difficulty darker grids (they are partially transparent)

function boundary_line(pontszam,pontmatrix){
	for(let i=0;i<pontszam;i++){
		pontmatrix[i]=[]
		for(let j=0; j<pontszam;j++){
			pontmatrix[i][j]=0
			if(i==0 || i==szelsoertekk || j==0 || j==szelsoertekn){
				pontmatrix[i][j]=1
				max++
			}
		}
	}
	return pontmatrix
}
boundary_line(pontszam,pontmatrix)
console.log(JSON.stringify(pontmatrix))

/*
for(let i=0;i<negyzetszam;i++){
	negyzetmatrix[i]=[]
	for(let j=0; j<negyzetszam; j++){
		negyzetmatrix[i][j]=0
	}
}
*/

function output(pontszam,pontmatrix){
	//maze input and output
	let min=0
	//traversing the maze edges

	let randome=Math.floor(Math.random()*(max-min+1))+min
	let randomm=randome
	while(Math.abs(randomm-randome)<2){
		randomm=Math.floor(Math.random()*(max-min+1))+min
	}
	let bejart=0;
	for(let i=0;i<4;i++){
		if(i%2==0){
			for(let j=0;j<pontszam;j++){
				if(bejart==randome || bejart==randomm){
					pontmatrix[j][0]=0
				}
				bejart++
			}
		}
		else{
			for(let j=0;j<pontszam;j++){
				if(bejart==randome || bejart==randomm){
					pontmatrix[0][j]=0
				}
				bejart++
			}
		}
		bejart--
	}
}

output(pontszam,pontmatrix)
console.log(JSON.stringify(pontmatrix))


//connecting path
function connecting_path(pontmatrix){
let maxuthossz=40
let aktualishossz=0
let hozzahossz
let irany
let hozzaadando
let aktualisvektor=[0,0]
let jelenlegi_koordinata=[0,0] //automatically assigned a valid value on input generation
let vegpont_koordinata=[0,0] //automatically assigned a valid value on output generation
let nincsvege=0

//vector 'breaking'
let alapvektor=[vegpont_koordinata[0]-kezdopont_koordinata[0],vegpont_koordinata[1]-kezdopont_koordinata[1]]


//marks visited cells to define the path, backtracking to generate a new path upon hitting a dead end

//resetting
let hossz=0
hossz=aktualistomb.length
while(hossz!=0){}
for(let h=0;h<hossz;h++)
for(let i=0;i<4;i++){}
aktualistomb=[]
hossz=kovetkezotomb.length
for(let j=0;j<hossz;j++){
	aktualistomb[j]=kovetkezotomb[j]
}
kovetkezotomb=[]

}
/*

//paths originating from the connecting path, also subject to maximum path length

//path traversal
//side paths branch off at random locations, with the rule that they cannot cross the main path

//the algorithm runs until all cells are covered. Once initial branching is complete, the second phase targets 
//the remaining empty cells, spawning new paths from these points rather than the main connector.

//eliminating wide open areas
let ideiglenesmatrix=[]
let ures=0
let randomkitolt=0
for(let i=0;i<2;i++){
	ideiglenesmatrix[i]=[]
}

for(let i=0;i<szelsoertekn-1;i++){
	for(let j=0;j<szelsoertekk-1;j++){
		for(let z=0;z<2;z++){
			for(let k=0;k<2;k++){
				ideiglenesmatrix[z][k]=
				if(==0){
					ures++
				}
			}
		}
		if(ures==4){
			randomkitolt=Math.floor(Math.random()*(3-0+1))+0
		}
		ures=0
	}
}                  

//storing:a wall is stored by a pair of points (2 coordinates)

//scanning left-to-right, top-to-bottom, checking 2x2 sections

//different difficulty levels

//default is 20x20

function side_paths(){
	let iranyvektor=[vegpont[0]-kezdopont[0],vegpont[1]-kezdopont[1]]
	for(let i=0; i<few; i++){
		
	}
}

function dside_patha(){
	let iranyvektor=[vegpont[0]-kezdopont[0],vegpont[1]-kezdopont[1]]
}

*/