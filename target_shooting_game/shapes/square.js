function triangle_division(){
	
}

function triangle_border(){
	
}

function fill(){
	
}

function plain_transformation(){
	
}

//rectangle and square
//plain
//center
//diagonal length
//using circular traversing
//angle between the diagonals
//dot product (two vectors)
//square filling (2D filling, plain transformation)

r=diagonal/2
a=(diagonal/Math.sqr(2))/2
let iranytomb=[[1,1],[-1,1],[-1,-1],[1,-1]]
let ponttomb=[[0,0],[0,0],[0,0],[0,0]]
for(let i=0;i<4;i++){
	for(let j=0;j<2;j++){
		ponttomb[i][j]=iranytomb[i][j]*a
	}
}
//square rotation