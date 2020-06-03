const p = document.querySelector('p');
const divs = document.querySelectorAll('div');
const waffle = document.querySelector('.waffle');
const waffleImg = waffle.querySelector('img');
const heading = document.querySelector('h2');

// console.log(heading.textContent);
// console.log(heading.innerText);
// heading.textContent = 'Booty shake';
// console.dir(heading.textContent);
// console.log(heading.outerHTML);
// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent}🍕`;
// pizzaList.insertAdjacentText('beforeend', '🍕');

// ? Classes !!
const pic = document.querySelector('.nice');
pic.classList.add('tchoin');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'Cute Pup'; // setter
console.log(pic.alt); // getter

pic.addEventListener('load', function() {
  console.log(pic.naturalWidth);
});
