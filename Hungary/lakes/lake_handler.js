//lake generation
//living organisms

let toko=[];

function lake_placement(toko){
	for(let z=0; z<lakes_list.len;z++){
		let lake=lakes_list[z];
		lake(toko[z]);
	}
}

function Lake_Balaton(coordinate){}
function Lake_Velence(coordinate){}
function Lake_Neusiedl(coordinate){}
function Lake_Tisza(coordinate){}