//localising large border arrays

import { border_details } from './border_vectors.js';
let current_outer_zone=new Array(1000).fill(0).map(()=> [0,0]);

let east=0;
let west=0;
let north=0;
let south=0;
let helpx=0;
let helpy=0;
let help2x=0;
let help2y=0;
let borderid=0;
let borderid2=0;
let beginnerX=23;
let beginnerY=16;
let addend=0;
let direction_matrix=[[0,-1],[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1]]

function incremental_addx(){
	if(valuey>0 && valuex>0){
		addend=valuey/valuex;
	}
	else if(valuey>0 && valuex<0){
		addend=Math.abs(valuey/valuex);
	}
	else if(valuey<0 && valuex<0){
		addend=(-1)*valuey/valuex;
	}
	else if(valuey<0 && valuex>0){
		addend=valuey/valuex;
	}
}

function incremental_addy(){
	if(valuey>0 && valuex>0){
		addend=valuex/valuey;
	}
	else if(valuey>0 && valuex<0){
		addend=valuex/valuey;
	}
	else if(valuey<0 && valuex<0){
		addend=(-1)*valuex/valuey;
	}
	else if(valuey<0 && valuex>0){
		addend=Math.abs(valuex/valuey);
	}
}

function border_block(){
	let neww=document.createElement('div');
	neww.id=`hatar${borderid}`;
	neww.classList.add('teruletnegyzetek');
	neww.style.left=`${beginnerX}vw`;
	neww.style.top=`${beginnerY}vw`;
	document.getElementById('terkep').appendChild(neww);
	borderid++;
}

function draw_area(hatarreszlet,vizx,fugy){
	let aktualisvektor=[0,0];
	let alapx=beginnerX;
	let alapy=beginnerY;
	let neww;
	let hozzaadx;
	let hozzaady;
	let tolx;
	let toly;
	let pot=0
	helpx=vizx;
	help2x=vizx;
	helpy=fugy;
	help2y=fugy;
	let egy=0;
	let ketto=0;
	let hossz=0;
	while(hossz<hatarreszlet.length){
		egy+=hatarreszlet[hossz][0];
		ketto+=hatarreszlet[hossz][1];
		hossz++;
	}
	hatarreszlet[hossz-1][0]=(-1)*egy;
	hatarreszlet[hossz-1][1]=(-1)*ketto;
	for(let x=0;x<hatarreszlet.length; x++){
		aktualisvektor[0]=hatarreszlet[x][0];
		aktualisvektor[1]=hatarreszlet[x][1];
		valuex=aktualisvektor[0];
		valuey=aktualisvektor[1];
		if(valuex!=0){
			hozzaadx=valuex/Math.abs(valuex);
		}
		else if (valuex==0){
			hozzaadx=0;
		}
		if(valuey!=0){
			hozzaady=valuey/Math.abs(valuey);
		}
		else if (valuey==0){
			hozzaady=0;
		}
		tolx=beginnerX+valuex;
		toly=beginnerY+valuey;
		if(beginnerX!=tolx || beginnerY!=toly){
			if(Math.abs(valuex)>=Math.abs(valuey)){
				pot=beginnerY;
				if(valuey==0){
					addend=0;
				}
				else{
					hozzaadkiszx();
				}
				while(beginnerX!=tolx){
					beginnerX+=hozzaadx;
					pot+=addend;
					if(Math.abs(Math.round(pot-0.0001))-Math.abs(beginnerY)!=0){
						beginnerY=Math.round(pot-0.0001);
						}
					iranyok();
					hatarblokk();
				}
			}
			else if(Math.abs(valuex)<Math.abs(valuey)){
				pot=beginnerX;
				if(valuex==0){
					addend=0;
				}
				else{
					hozzaadkiszy();
				}
				while(beginnerY!=toly){
					beginnerY+=hozzaady;
					pot+=addend;
					if(Math.abs(Math.round(pot-0.0001))-Math.abs(beginnerX)!=0){
						beginnerX=Math.round(pot-0.0001);
						}
					iranyok();
					hatarblokk();
				}
			}
		}
	}
	north=help2y;
	west=help2x;
	south=helpy;
	east=helpx;
}

function directions(){
	if(beginnerX>helpx){
		helpx=beginnerX;
	}
	if(beginnerX<help2x){
		help2x=beginnerX;
	}
	if(beginnerY>helpy){
		helpy=beginnerY;
	}
	if(beginnerY<help2y){
		help2y=beginnerY;
	}
}

let teruletaz=0;
let y=0;
let indexx=1;
let viewportWidth = window.innerWidth;

function northernmost(){
	let i=0;
	while(i<borderid){
	let divid='hatar'+i;
	let d=document.getElementById(divid);
	let pos=d.getBoundingClientRect();
	let posx=pos.left;
	posx=Math.round((posx / viewportWidth) * 100);
	let posy=pos.top;
	posy=Math.round((posy/viewportWidth)*100);
	if(posy==north){
		east=posx;
		}
	i++;}
	let neww=document.createElement('div');
	neww.id='terulet0';
	neww.classList.add('teruletnegyzete');
	neww.style.left=`${east}vw`;
	neww.style.top=`${y+1}vw`;
	document.getElementById('terkep').appendChild(neww);
	teruletaz++;
}

let eszakvan=0;
let delvan=0;
let keletvan=0;
let nyugatvan=0;
let eszakvolt=0;
let delvolt=0;
let nyugatvolt=0;
let keletvolt=0;
let ittvolt=0;
let vankitolt=1;
let fe=0;

function area_filling(east,y){
	let neww=document.createElement('div');
	neww.id=`terulet${teruletaz}`;
	neww.classList.add('teruletnegyzete');
	neww.style.left=`${east}vw`;
	neww.style.top=`${y}vw`;
	document.getElementById('terkep').appendChild(neww);
	aktualisteruletek[teruletaz]=[east,y];
	teruletaz++;
	ittvolt++;
}

function fillable_areas(east,y){
	eszakvan=0;
	delvan=0;
	keletvan=0;
	nyugatvan=0;
	for(let i=0;i<borderid;i++){
		let divid='hatar'+i;
		let d=document.getElementById(divid);
		let pos=d.getBoundingClientRect();
		let posx=pos.left;
		let posy=pos.top;
		posx=Math.round((posx/viewportWidth)*100);
		posy=Math.round((posy/viewportWidth)*100);
		if(east==posx && y-1==posy){eszakvan=1;};
		if(east==posx && y+1==posy){delvan=1;};
		if(east+1==posx && y==posy){keletvan=1;};
		if(east-1==posx && y==posy){nyugatvan=1};
		}
}

function fillable_areas2(east,y){
	eszakvolt=0;
	delvolt=0;
	keletvolt=0;
	nyugatvolt=0;
	for(let i=0;i<teruletaz;i++){
			let divid='terulet'+i;
			let d=document.getElementById(divid);
			let posd=d.getBoundingClientRect();
			let posxd=posd.left;
			let posyd=posd.top;
			posxd=Math.round((posxd/viewportWidth)*100);
			posyd=Math.round((posyd/viewportWidth)*100);
			if(east==posxd && y-1==posyd){eszakvolt=1;};
			if(east==posxd && y+1==posyd){delvolt=1;};
			if(east+1==posxd && y==posyd){keletvolt=1;};
			if(east-1==posxd && y==posyd){nyugatvolt=1};
		}
}

function area_fill(east,y){
	while(vankitolt==1){
		vankitolt=0;
		fe=teruletaz-1-ittvolt;
		while(fe<teruletaz){
			let divid='terulet'+fe;
			let sediv=document.getElementById(divid);
			let sedivpos=sediv.getBoundingClientRect();
			let iksz=sedivpos.left;
			let ipszilon=sedivpos.top;
			iksz=Math.round((iksz/viewportWidth)*100);
			ipszilon=Math.round((ipszilon/viewportWidth)*100);
			kitoltendoek(iksz, ipszilon);
			kitoltendoekk(iksz,ipszilon);
			if(eszakvan==0 && eszakvolt==0){
				area_filling(iksz,ipszilon-1);
				vankitolt=1;
			}
			if(nyugatvan==0 && nyugatvolt==0){
				area_filling(iksz-1,ipszilon);
				vankitolt=1;
			}
			if(delvan==0 && delvolt==0){
				area_filling(iksz,ipszilon+1);
				vankitolt=1;
			}
			if(keletvan==0 && keletvolt==0){
				area_filling(iksz+1,ipszilon);
				vankitolt=1;
			}
			fe++;
		}
		ittvolt=0;
	}
}

let eszaknyugatvan=0;
let delnyugatvan=0;
let delkeletvan=0;
let eszakkeletvan=0;

function direction1(ujid,east,y){
	let uji=document.getElementById(ujid);
	let ujis=uji.getBoundingClientRect();
	let keelet=ujis.left;
	let yy=ujis.top;
	keelet=Math.round((keelet/viewportWidth)*100);
	yy=Math.round((yy/viewportWidth)*100);
	if(keelet==east && yy==y-1){
		eszakvan=1;
	}
	if(keelet==east-1 && yy==y-1){
		eszaknyugatvan=1;
	}
	if(keelet==east-1 && yy==y){
		nyugatvan=1;
	}
	if(keelet==east-1 && yy==y+1){
		delnyugatvan=1;
	}
	if(keelet==east && yy==y+1){
		delvan=1;
	}
	if(keelet==east+1 && yy==y+1){
		delkeletvan=1;
	}
	if(keelet==east+1 && yy==y){
		keletvan=1;
	}
	if(keelet==east+1 && yy==y-1){
		eszakkeletvan=1;
	}
}

function area_assessment(east,y){
	for(let i=0; i<borderid;i++){
		let ujid='hatar'+i;
		direction1(ujid,east,y)
	}
	for(let i=0; i<teruletaz;i++){
		let ujid='terulet'+i;
		direction1(ujid,east,y)
	}
	for(let i=0; i<borderid2; i++){
		let ujid='hatart'+i;
		direction1(ujid,east,y)
	}
}

function new_border(east,y){
	let neww=document.createElement('div');
	neww.id=`hatart${borderid2}`;
	neww.classList.add('teruletnegyzet');
	neww.style.left=`${east}vw`;
	neww.style.top=`${y}vw`;
	document.getElementById('terkep').appendChild(neww);
	borderid2++;
}

function border_plains(){
	for(let i=0; i<borderid; i++){
		eszakvan=0;
		nyugatvan=0;
		delvan=0;
		keletvan=0;
		eszaknyugatvan=0;
		delnyugatvan=0;
		delkeletvan=0;
		eszakkeletvan=0;
		let elsoid='hatar'+i;
		let elso=document.getElementById(elsoid);
		let elsoo=elso.getBoundingClientRect();
		east=elsoo.left;
		y=elsoo.top;
		east=Math.round((east/viewportWidth)*100);
		y=Math.round((y/viewportWidth)*100);
		teruletvizsgal(east,y);
		if(eszakvan==0){
			ujhatart(east,y-1);
			}
		if(eszaknyugatvan==0){
			ujhatart(east-1,y-1);
			}
		if(nyugatvan==0){
			ujhatart(east-1,y);
			}
		if(delnyugatvan==0){
			ujhatart(east-1, y+1);
			}
		if(delvan==0){
			ujhatart(east,y+1);
			}
		if(delkeletvan==0){
			ujhatart(east+1,y+1);
			}
		if(keletvan==0){
			ujhatart(east+1,y);
			}
		if(eszakkeletvan==0){
			ujhatart(east+1,y-1)
			}
	}
}

function area_overwrite(){
	let iid;
	east=helpx;
	west=help2x;
	let ui;
	let elo;
	for(let i=north+1; i<south+1; i+=1){
		for(let d=west+1; d<east; d+=1){
			for(let e=0; e<teruletaz; e++){
				let ui='terulet'+e;
				let atmeneti=document.getElementById(ui);
				if(atmeneti){
				iid=atmeneti.getBoundingClientRect();
				let ik=iid.left;
				let ip=iid.top;
				ik=Math.round((ik/viewportWidth)*100);
				ip=Math.round((ip/viewportWidth)*100);
				if(ik==d && ip==i){
					elo='terulet'+d+'-'+i;
					atmeneti.id=elo;
				}
				}
			}
		}
	}
}