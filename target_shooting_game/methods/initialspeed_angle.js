//let =
function initial_speed(Fmax){
	//different weapons:different speeds
	//W=(Fmax/2)*s
	//W=E
	//E=(1/2)*m*vo*vo
	//(Fmax/2)*s=(1/2)*m*vo*vo
	//vo*vo=(Fmax*s)/m
	let vo=Math.sqrt((Fmax*s)/m)
	return vo
}

function calculate_angle(){
	//a circle on the 2D plain
}

function angle_of_projection(){
	let x=0
	//raycasting from cursor location
	
	let kezdopont=[xo,yo,zo]
	let metszespont=[xf,yf,zf]
	let kulx=xf-xo
	let kuly=yf-yo
	let radian = Math.atan2(kuly, kulx);
	let angle = radian * (180 / Math.PI);
	return angle
}