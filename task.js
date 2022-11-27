//Задание №1

const span = document.getElementById('timer');   

function countdown() {            
	if(span.textContent > 0) {
		span.textContent -= 1;
	}
	else {
		clearInterval(timer);
		alert('Вы победили в конкурсе');
	}
}

let timer = setInterval(countdown, 1000);

/*
//Повышенный уровень сложности #1

const data = document.getElementById('timer');
const tempArr = [];
let hours, minuts, seconds;

tempArr.push(data.textContent);

function getTime() {
	hours = Number(tempArr[0][0] + tempArr[0][1]);
	minuts = Number(tempArr[0][3] + tempArr[0][4]);
	seconds = Number(tempArr[0][6] + tempArr[0][7]);
}

function checkTime(i) {
	if (i >= 10) {
		return i;
	}
	else {
		let tempTime = '0' + i;
		return tempTime;	
	}
		
}

function countdown() {

		if (seconds !== 0) {
			seconds -= 1;}
			else {
				seconds = 59;
				minuts -= 1;
				if (minuts === 0) { 
					if (hours === 0) {
				     minuts = 0;
					}
					else {
					  minuts = 59;
				     hours -= 1;
				   }
					
			   }
			}

		if (hours === 0 && minuts === 0 && seconds === 0) {
			clearInterval(timer);
		   alert('Вы победили в конкурсе');
		}

		data.textContent = checkTime(hours) + ':' + checkTime(minuts) + ':' + checkTime(seconds);
		console.log(hours + ':' + minuts + ':' + seconds);
}

		
getTime();		
let timer = setInterval(countdown, 1000);

//Повышенный уровень сложности #2
const span = document.getElementById('timer');   

function countdown() {            
	if(span.textContent > 0) {
		span.textContent -= 1;
	}
	else {
		clearInterval(timer);
		window.open('http://ya.ru','_self',false);
	}
}

let timer = setInterval(countdown, 1000);

*/








