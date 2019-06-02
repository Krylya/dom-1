const goblin = document.createElement('img');
goblin.src = '/src/img/goblin.png';

let lastNum = 0;

const container = document.querySelector('.container');
const cells = container.querySelectorAll('.item');

// генерируем случайное число
const randomNumber = () => {
  const rand = Math.floor(Math.random() * 16);
  if (rand === lastNum) {
    randomNumber();
  }
  lastNum = rand;
  return rand;
};

function addImageToRandomCell() {
  const num = randomNumber();
  cells[num].appendChild(goblin);
}

setInterval(addImageToRandomCell, 3000);
