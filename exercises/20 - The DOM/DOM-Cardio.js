// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
const unorderedList = document.createElement('ul');

// add three list items with the words "one, two three" in them
// put that list into the above wrapper
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
li1.textContent = 'One';
li2.textContent = 'Two';
li3.textContent = 'Three';

unorderedList.insertAdjacentElement('afterbegin', li1);
li1.insertAdjacentElement('afterend', li2);
unorderedList.insertAdjacentElement('beforeend', li3);

div.appendChild(unorderedList);

// create an image

const myImage = document.createElement('img');

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
const width = 250;
myImage.src = `https://picsum.photos/${width}`;
myImage.classList.add('cute');
myImage.alt = 'Cute Puppy';
div.appendChild(myImage);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myHTML = `
<div>
  <p></p>
  <p></p>
</div>
`;

unorderedList.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
// remove the first paragraph
const wrapper = document.querySelector('.wrapper');
wrapper.children[0].children[1].classList.add('warning');

wrapper.children[0].children[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  const ageIndDogYears = age * 7;
  const playerHTML = `
  <div class="playercard">
    <h2>${name} - ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${ageIndDogYears}. That would be a tall dog!</p>
  </div>
  `;
  return playerHTML;
}

// make a new div with a class of cards
const div2 = document.createElement('div');
div2.classList.add('cards');

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
