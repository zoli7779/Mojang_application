function move_initial(){
	const ujjatekos=document.getElementById('ujjatekos');
    let currentX = ujjatekos.style.left;
    let currentY = ujjatekos.style.top;
	let leftw=parseFloat(currentX);
	let topw=parseFloat(currentY);
	const step=0.2;
	ujjatekos.style.left = `${leftw}vw`;
	ujjatekos.style.top = `${topw}vw`;
}

function move(event) {
	const ujjatekos=document.getElementById('ujjatekos');
    let currentX = ujjatekos.style.left;
    let currentY = ujjatekos.style.top;
	let leftw=parseFloat(currentX);
	let topw=parseFloat(currentY);
	const step=0.2;
	
    switch (event.code) {
		case 'KeyW':
			topw -= step;
            break;
        case 'KeyS':
			topw += step;
            break;
        case 'KeyA':
            leftw -= step;
            break;
		case 'KeyD':
            leftw += step;
			break;
		//3D things
	}
	ujjatekos.style.left = `${leftw}vw`;
	ujjatekos.style.top = `${topw}vw`;
}
document.addEventListener('keydown', mozgat);

//walking
//running
//sneaking

//movement in water
//movement with a boat
//movement with a minecart

//jumping
//hunger
//if hunger is low:no running