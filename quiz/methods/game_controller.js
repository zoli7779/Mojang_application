//a nice background with an image of the base game
//it will always show the correct answer(s)
//different topics
//question sets (20, 40 questions in an array)
//there is a small chance that a supernova/shooting star/comet will appear on the sky background for after every correct answer
//gamemodes:only selected types of questions
//question type

function homepage(){
	
}

function new_game(){
	
}

function select_question(){
	
}

function save_results(){
	
}

function temporary_storage(){
	
}

function pause(){
	
}

function exit(){
	
}

function background_music(){
	
}

function sound(){
	
}

let kerdestomb  //importing data from the database
let hossz=kerdestomb.length
let melyik=Math.floor(Math.random()*((hossz-1)-0+1))+0
let legjobbarany=kerdestomb[0].arany
let azon=0

//finding the question with the highest success rate

for(let i=0;i<hossz;i++){
	
	if(((kerdestomb[i].helyesvalasz)/kerdestomb[i].osszesvalasz)>legjobbarany){
		azon=i
	}
}

//question type 
let kerdestype=kerdes[1]
switch (kerdestype){
	case 0:
		feleletvalasztos
		break
	case 1:
		szovegbeiros
		break
	case 2:
		listabolvalasztos
		break
	case 3:
		szamos
		break
	default:
		ujkerdes
}

//logging response success status for each question, complex question selection mechanism
//or numerical questions

//hit detection:
if(bead==helyesvalasz){

}

pontossag
//handling zero values
if(Math.abs(bead)>Math.abs(helyesvalasz)){
	pontossag=Math.abs(bead/helyesvalasz)
}
if(bead<helyesvalasz){
	pontossag=Math.abs(helyesvalasz/bead)
}
if(pontossag<=1%){}
//or fill-in-the-blank questions
if(beirt==helyesvalasz)

//green (correct) or red (incorrect) visual feedback
//or multiple-choice
//if the mouse hits the correct rectangle, identifying the rectangle

//option / options logging
//for list-based mode: one blank space in the question/answer to select from a dropdown list

//In case of an answer:
//incrementing the submitted counter
//In case of a correct answer:
//incrementing the correct count on the target question

//adding a new question (which may be verified by staff)
//storing questions in a database, with numeric questions in a separate table
//schema structure for numeric questions: 3 columns (question ID, prompt text, answer) with one question per row, NUMBER type
//for text-input questions: also a separate table with 3 columns: question ID, prompt text, and text-type answer
//for multiple-choice questions: four options by default, but can be fewer (e.g., yes/no type)
//for multiple-choice questions: also a separate table with 6 columns per row, one question per row, with the following structure: question ID, 
//prompt text, option 1, option 2, option 3, option 4
//for list-based questions: dedicated table, rows are identified by question IDs, with columns: question ID, prompt text, option 1, 
//option 2, option 3, option 4, option 5