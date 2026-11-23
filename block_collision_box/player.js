class player{
	hit_points_(HP);
	position; 
	disease; 
	poisoning; 
	height; 
	attack_stat; 
	thirst; //certain biomes only
	hunger; 
	body_temperature;
	protective_suit;
	shield;
	tool;
	rest; 
	stamina; 
	max_speed;
	base_speed; 
	age;
	mood; //certain biomes only 
	render_distance
}

function create_player(){
			newplayer = document.createElement('div');
            const color = 'blue';
            const randomX = Math.random() * 90;
            const randomY = Math.random() * 90;
            newplayer.id = 'newplayer';
            newplayer.style.position = 'absolute';
            newplayer.style.width = `${0.5}vw`;
            newplayer.style.height = `${0.5}vw`;
            newplayer.style.backgroundColor = color;
            newplayer.style.border = '1px solid black';
            newplayer.style.left = `${randomX}vw`;
            newplayer.style.top = `${randomY}vh`;
			newplayer.style.zIndex = 1000;
            document.getElementById('terkep').appendChild(newplayer);
			mozgatinic();
}

function breed(){
	
}