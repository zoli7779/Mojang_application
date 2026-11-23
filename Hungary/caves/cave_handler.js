let barko=[];

function caves(barko){
	for(var z=0; z<cave_list.len;z++){
		var ba=cave_list[z];
		ba(barko[z]);
	}
}