// find elements

const formEl = document.querySelector('.login-form');
const labelsEl = document.querySelectorAll('.login-form label');
const inputEmailEl = document.querySelector('[name = "email"]');
const inputPasswordEl = document.querySelector('[name = "password"]');
const buttonEl = document.querySelector('.login-form button');


////////////// find elements



// styles

labelsEl.forEach((label) => {
    label.classList.add('label-js')
})

buttonEl.classList.add('btn-js')

inputEmailEl.style.height = '40px';
inputPasswordEl.style.height = '40px'

// ////////////////styles




/* script */



formEl.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValue = inputEmailEl.value.trim();
    const passwordValue = inputPasswordEl.value.trim();

    if (emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in');
    } else {
      
        const formData = {
            email: emailValue,
            password: passwordValue,
        };

       
        
        console.log(formData);
        
        buttonEl.form.reset();
    }
});

/* /////////////////script */