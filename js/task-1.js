
// ======================STYLES==========================

const classForLi = document.querySelectorAll('.item li');

classForLi.forEach((li) => {
    li.classList.add('list')
});



const classForTitle = document.querySelectorAll('.item h2');

classForTitle.forEach((h2) => {
    h2.classList.add('list-title')
});


const classForUl = document.getElementById('categories');
classForUl.classList.add('list-categories');

// ///////////////////////STYLES///////////////////////


// Порахує й виведе в консоль кількість категорій в 
// ul#categories, тобто елементів li.item.



// Для кожного елемента li.item у списку ul#categories 
// знайде й виведе в консоль текст заголовка елемента 
// (тегу <h2>) і кількість елементів у категорії (усіх <li>, 
//     вкладених у нього).



const listOfCategories = document.querySelectorAll('#categories .item');
console.log('Number of categories: ', listOfCategories.length)



const nameOfList = document.querySelectorAll('.item h2');
nameOfList.forEach((li) => {
    console.log('Category: ', li.textContent)


    const quantityOfLists = li.nextElementSibling.querySelectorAll('li');
    console.log('Elements: ', quantityOfLists.length);
         })


