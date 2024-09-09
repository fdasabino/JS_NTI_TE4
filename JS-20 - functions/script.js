"use strict";

// * Functions
// ? A piece of code that can be reused in the future

// ? declaring a function
function logger(log) {
  console.log(log);
}

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

// ? calling / running / invoking a function
logger("Hello World");

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const juiceMix = fruitProcessor(5, 3);
console.log(juiceMix);
