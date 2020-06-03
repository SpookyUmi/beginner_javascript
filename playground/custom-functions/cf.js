// Function definition
function calculateBill(billAmount, taxRate) {
  /* console.log(billAmount, taxRate); */
  // console.log('Running Calculate Bill!!');
  const total = billAmount * (1 + taxRate);
  return total;
}

const umiTotal = 500;
const umiTaxRate = 0.3;
const myTotal = calculateBill(umiTotal, umiTaxRate);
console.log(myTotal);

/* function sayHiTo(firstName, lastName) {
  return `Hello ${firstName} ${lastName}`;
} */

/* const greeting = sayHiTo('umi', 'dnv');
console.log(greeting); */

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}
