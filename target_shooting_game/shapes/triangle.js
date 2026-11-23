function edges(){
	
}

function fill(){
	//center of gravity
}

function plain_transformation(){
	
}

//triangle
//rotation (dividing 360 degrees into equal parts, random distances)
let vertices=[]
for(let j=0;j<3;j++){
	csucsok[j]=[]
	for(let u=0;u<3;u++){
		csucsok[j][u]=Math.random()
	}
}

//valid triangle, area cannot be zero
//using Heron's formula to calculate triangle area
function Heron(){
let a=Math.sqrt((x2-x1)**2+(y2-y1)**2+(z2-z1)**2)
let b=Math.sqrt((x3-x2)**2+(y3-y2)**2+(z3-z2)**2)
let c=Math.sqrt((x1-x3)**2+(y1-y3)**2+(z1-z3)**2)
let s=(a+b+c)/2
let t=Math.sqrt(s*(s-a)*(s-b)*(s-c))
if(t==0){}
}

//inner filling(2D method, but then plain transformation, avoiding double filling)

//random rotation of the triangle (the plain)
//in plain.js file
//determining if a 3D point lies inside a triangle

//traversing the triangle's plane to find the hit point
//every polygon will be filled using the triangle fill method