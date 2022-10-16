function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let randomCoolor = getRandomHexColor();

// вибірка елементів
const btn = document.querySelector('button');
const span = document.querySelector('.color');
const body = document.querySelector('body');

// підписка елемента
btn.addEventListener('click', changeColor);

  // обробка необхідних елементів
function changeColor(event) {
  body.style.backgroundColor = randomCoolor;
  span.textContent = randomCoolor;
};