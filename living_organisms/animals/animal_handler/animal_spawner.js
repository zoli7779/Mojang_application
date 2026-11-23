//biome tracking

var animals = new Array(47).fill(null).map(() => []);

function spawnanimal(){
	var melyikallat = Math.floor(Math.random() * 47) + 1;
			switch(melyikallat){
				case 1:
					brown_bear();
					break;
				case 2:
					wild_boar();
					break;
				case 3:
					red_fox();
					break;
				case 4:
					cow();
					break;
				case 5:
					hedgehog();
					break;
				case 6:
					dormouse();
					break;
				case 7:
					wildcat();
					break;
				case 8:
					badger();
					break;
				case 9:
					dog();
					break;
				case 10:
					polecat();
					break;
				case 11:
					pine_marten();
					break;
				case 12:
					beech_marten();
					break;
				case 13:
					white_stork();
					break;
				case 14:
					villager();
					break;
				case 15:
					mallard()
					break;
				case 16:
					rat();
					break;
				case 17:
					mouse();
					break;
				case 18:
					ant();
					break;
				case 19:
					bee();
					break;
				case 20:
					wasp();
					break;
				case 21:
					weasel();
					break;
				case 22:
					beaver();
					break;
				case 23:
					rabbit();
					break;
				case 24:
					hare();
					break;
				case 25:
					otter();
					break;
				case 26:
					catfish();
					break;
				case 27:
					carp();
					break;
				case 28:
					white-tailed_eagle();
					break;
				case 29:
					crow();
					break;
				case 30:
					tit();
					break;
				case 31:
					pheasant();
					break;
				case 32:
					raven();
					break;
				case 33:
					goose();
					break;
				case 34:
					stoat();
					break;
				case 35:
					deer();
					break;
				case 36:
					roe_deer();
					break;
				case 37:
					wolf();
					break;
				case 38:
					sheep();
					break;
				case 39:
					goat();
					break;
				case 40:
					duck();
					break;
				case 41:
					chicken();
					break;
				case 42:
					horse();
					break;
				case 43:
					butterfly();
					break;
				case 44:
					mosquito();
					break;
				case 45:
					squirrel();
					break;
				case 46:
					mute_swan();
					break;
				case 47:
					meadow_viper();
					break;
}

function removeanimal(){}