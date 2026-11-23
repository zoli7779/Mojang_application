function calculate(x,v0,angleInDegrees,g=9.81) {
    // Convert angle to radians
    let radians = angleInDegrees*(Math.PI/180);
    
    let tanAlpha = Math.tan(radians);
    let cosAlpha = Math.cos(radians);
    
    // Calculate trajectory equation
    let firstTerm = x*tanAlpha;
    let secondTerm = (g/(2*(v0**2)*(cosAlpha**2)))*(x**2);
    
    let y = firstTerm-secondTerm;
    return y; // Returns the y height at a given x distance
	
	//air drag
}

function shcedule(){
	
}