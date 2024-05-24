// find element

const spanEl = document.querySelector('#name-output');
const titleEl = document.querySelector('h1');
const inputEl = document.querySelector('#name-input');

// ////////find element



// styles

inputEl.classList.add('input-js')
titleEl.classList.add('title-js')

// //////styles




// script

inputEl.addEventListener('input', function (event) {

    spanEl.textContent = event.target.value.trim() || 'Anonimous';
} )

// /////////////script





