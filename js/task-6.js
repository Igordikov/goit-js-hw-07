

// find elements

const inputQuantity = document.querySelector('#controls input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const containerForEl = document.querySelector('#boxes');

// ////////////find elements




// styles

// inputQuantity.classList.add('input-quantity-js');
buttonCreate.classList.add('button-create');
buttonDestroy.classList.add('button-destroy-js');


// ///////////styles






// script




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  containerForEl.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    containerForEl.appendChild(box);
  }
};

buttonCreate.addEventListener('click', () => {
  const amount = Number(inputQuantity.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputQuantity.value = '';
    } else {
      alert('Введіть число от 1 до 100.')
    }
});

buttonDestroy.addEventListener('click', () => {
  containerForEl.innerHTML = '';
});










// ////////////////////script
