//it does not necessarily originates from water bodies
//after long rains it may happen
//maximum height:3 blocks (from the starting point to the surface)
//certain biomes
//not so common
//destroys crops most plants
//it can even harm trees after a long time
//suffocation
//specific water type (can destroy wooden blocks, doors)

function create(){
	//limited numbers
}

function spread(){
	//from down to top
	//circular spread
	for(let i=0;i<sugar;i++){
		aktualistomb=[]
		for(let h=0;h<kovetkezotomb.length;h++){
			aktualistomb[h]=kovetkezotomb[h]
		}
		kovetkezotomb=[]
	}
}

function shrink(){
	//from top to down
	//circular shrink
	for(let i=r;r>0;r--){
		aktualistomb=[]
		for(let h=0;h<kovetkezotomb.length;h++){
			aktualistomb[h]=kovetkezotomb[h]
		}
		kovetkezotomb=[]
	}
}

function destroy(){
	
}

function sound(){
	
}