const goblin = document.createElement('img');
goblin.src = '/src/img/goblin.png';

let lastNum = 0;

const container = document.querySelector('.container');
const cells = container.querySelectorAll('.item');

setInterval(addImageToRandomCell, 3000);

function addImageToRandomCell() {
	let num = randomNumber();
	cells[num].appendChild(goblin);
}

//генерируем случайное число
const randomNumber = () => {
	let rand = Math.floor( Math.random() * 16);
	if(rand  === lastNum) {
		randomNumber() 
	};
	lastNum = rand;
	return rand;
}
