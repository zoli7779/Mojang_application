//sphere: radius (strength), center (x, y, z)

//terrain limit: 100x100 array with the spheres

let sphere_list=Array.from({length:1000},()=>new Array(4))
sphere_list[0]=[4,34,35,32]
//spherelist[1] = [4, 70, 50, 10]

function create_oscillation(){
	
}

function collide(){
	//vectors
	//simplification
}

function sphere_select(sphere_list,tombkkoordinata){
	let i=0
	while(i<sphere_list.length && sphere_list[i][0]!==undefined){
		gombkeszit(gomblista[i],tombkkoordinata)
		i++
	}
}

function sphere_make(tomb,tombkkoordinata){
	let tombmatrix=[[0,-1,0],[-1,0,0],[0,1,0],[1,0,0],[0,0,1],[0,0,-1]]
	let aktualishej = []
	let kovetkezohej = []
	let teljesGombTomb = [];
	let kezdopont=[0,0,0]
	let aktualispont=[0,0,0]
	let szamlalo=1
	let t=0
	let belfoglalt=0
	let kulfoglalt=0
	let tavolsag=0
	let krit=1/2
	let aktualissugar=0
	for(let f=0;f<3;f++){
		kezdopont[f]=tomb[f+1]
	}
	aktualishej[0]=[]
	aktualishej[0].push(0,kezdopont[0],kezdopont[1],kezdopont[2])
	let sugar=tomb[0]
	for(let z=0;z<sugar;z++){
		aktualissugar=z+1
		for(let r=0;r<szamlalo;r++){
			if(aktualishej[r][0]==0){
				aktualishej[r][0]=1
				teljesGombTomb = teljesGombTomb.concat(aktualishej);
				tombkkoordinata[aktualishej[r][1]][aktualishej[r][2]][aktualishej[r][3]][0]=1
			}
		}
		t=0
		szamlalo=0
		while(t<aktualishej.length){
			for(let r=0; r<6; r++){
				if(tombkkoordinata[aktualishej[t][1]+tombmatrix[r][0]][aktualishej[t][2]+tombmatrix[r][1]][aktualishej[t][3]+tombmatrix[r][2]][0]===undefined){
					for(let l=0;l<3;l++){
						aktualispont[l]=aktualishej[t][l+1]+tombmatrix[r][l]
					}
					for(let d=0;d<szamlalo;d++){
						if(kovetkezohej[d][0]==1 && kovetkezohej[d][1]==aktualispont[0] && kovetkezohej[d][2]==aktualispont[1] && kovetkezohej[d][3]==aktualispont[2]){
							belfoglalt=1
						}
					}
					if(belfoglalt==0){
						kovetkezohej[szamlalo]=[]
						kovetkezohej[szamlalo].push(1)
						for(let u=1;u<4;u++){
							kovetkezohej[szamlalo].push(aktualishej[t][u]+tombmatrix[r][u-1])
						}
						szamlalo++
						for(let d=0;d<6;d++){
							for(let a=0;a<3;a++){
								aktualispont[a]+=tombmatrix[d][a]
							}
							for(let s=0;s<szamlalo;s++){
								if(kovetkezohej[s][0]==1 && kovetkezohej[s][1]==aktualispont[0] && kovetkezohej[s][2]==aktualispont[1] && kovetkezohej[s][3]==aktualispont[2]){
									kulfoglalt=1
								}
							}
							for(let e=0;e<aktualishej.length;e++){
								if(aktualishej[e][0]==1 && aktualishej[e][1]==aktualispont[0] && aktualishej[e][2]==aktualispont[1] && aktualishej[e][3]==aktualispont[2]){
									kulfoglalt=1
								}
							}
							tavolsag=Math.sqrt(((aktualispont[0]-kezdopont[0])**2)+((aktualispont[1]-kezdopont[1])**2)+((aktualispont[2]-kezdopont[2])**2))
							if(tombkkoordinata[aktualispont[0]][aktualispont[1]][aktualispont[2]][0]===undefined){
								if(Math.abs(tavolsag-aktualissugar)<=krit && kulfoglalt==0 || tavolsag<aktualissugar && kulfoglalt==0){
									kovetkezohej[szamlalo]=[]
									kovetkezohej[szamlalo].push(1)
									for(let a=0; a<3;a++){
										kovetkezohej[szamlalo].push(aktualispont[a])
									}
									szamlalo++
								}
							}
							for(let a=0;a<3;a++){
								aktualispont[a]-=tombmatrix[d][a]
							}
							kulfoglalt=0
						}
					}
				}
				belfoglalt=0
			}
			t++
		}
		aktualishej=[]
		t=0
		while(t<kovetkezohej.length){
			aktualishej[t] = []
			aktualishej[t].push(0)
			for(let e=1;e<4;e++){
				aktualishej[t].push(kovetkezohej[t][e])
			}
			t++
		}
		kovetkezohej=[]
	}
	rajzol3DVoxelTerkep(teljesGombTomb, 0x4caf50);
}

function sphere_wave(kozeppont,amplitudo,periodusido){
	let sugar=0
	let frekvencia=1/periodusido
	while(amplitudo>=0.1){
		sugar++
	}
}

/*
function sphere_array_update(gomblista,terulethat){

}

function sphere_center(sugar,irany,kozeppont){

	return kozeppont
}

function inner_area_fill(){

}
*/