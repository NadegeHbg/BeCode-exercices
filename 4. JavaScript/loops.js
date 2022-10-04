// =======================================================================================
// 1. print numbers
// Write an algorithms which receives an integers n and prints:

// * the numbers from 1 to n

// * the numbers from 1 to n in descending order

// * the numbers from -n to n

// * the odd numbers from 1 to n
// =======================================================================================

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// SOLUTION 1 - numbers in order
// let n = getRandomIntInclusive(1, 50)
// console.log(`Comptons jusqu'à ${n}`)

// for (let nombres = 0; nombres <= n; nombres++) {
//   console.log(nombres)
// }

// SOLUTION 2 - numbers in order
// let nbrOfSmarties = getRandomIntInclusive(1, 50);
// console.log(`Il doit y avoir ${nbrOfSmarties} smarties dans le paquet`);
// let n = 0
// let packNotFull = true;

// while (packNotFull === true) {
//   n++;
//   if (n === nbrOfSmarties) {
//     packNotFull = false;
//   }
//   console.log(n)
// }

// SOLUTION 1 - numbers in counterorder
// let nbrOfSmarties = getRandomIntInclusive(1, 50);
// console.log(`Il y a ${nbrOfSmarties} smarties dans le paquet`);

// for (nbrOfSmarties; nbrOfSmarties >= 0; nbrOfSmarties--) {
//   console.log(nbrOfSmarties)
// }

// SOLUTION 2 - numbers in counterorder

// let nbrOfSmarties = getRandomIntInclusive(1, 50);
// console.log(`Il y a ${nbrOfSmarties} smarties dans le paquet`);
// let packNotEmpty = true;

// while (packNotEmpty === true) {
//   nbrOfSmarties = nbrOfSmarties - 1;
//   if (nbrOfSmarties === 0) {
//     packNotEmpty = false;
//   }
//   console.log(nbrOfSmarties)
// }

// SOLUTION 1 - numbers from -n to n

// let number = 5;
// let negativeNumber = number * (-1);
// console.log(number);
// console.log(negativeNumber)

// for (negativeNumber; negativeNumber <= number; negativeNumber++) {
//   console.log(negativeNumber)
// }

// SOLUTION 1 - odd numbers
// initialiser une valeur
// compter chaque nombre de cette valeur en partant de 0
// faire le modulo de chaque nombre par 2 et vérifier si != 0
// si différent, print

// let numberOdd = 0
// for (numberOdd; numberOdd <= 10; numberOdd++) {
//   if (numberOdd % 2 != 0) {
//     console.log(numberOdd)
//   }
// }

// =======================================================================================
// III - throw dices
// Write an algorithm which throws a dice a given number of time and count the number of time a certain number is received.

// lancer le dé x fois
// déterminer une face spécifique
// compter le nombre de fois que le dé est tombé sur cette face
// =======================================================================================

// Face to take into account
let face = 3;
// total of dice that matches
let totalOfFace = 0;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// let roll1 = getRandomIntInclusive(1, 6);
// let roll2 = getRandomIntInclusive(1, 6);
// let roll3 = getRandomIntInclusive(1, 6);
// console.log(roll1, roll2, roll3)

// get value for each roll 
// compare value of each roll with face variable
// if true, add one to totalOfFace

// if (roll1 === face) {
//   totalOfFace = totalOfFace + 1;
// }
// if (roll2 === face) {
//   totalOfFace = totalOfFace + 1;
// }
// if (roll3 === face) {
//   totalOfFace = totalOfFace + 1;
// }
// console.log(totalOfFace)

// == randomise number of roll ==
let rolls = Math.floor(Math.random() * 10)
console.log(`number of rolls : ${rolls}`);

for (let roll = 0; roll <= rolls; roll++) {
  let specificRoll = getRandomIntInclusive(1, 6)
  console.log(`That's one roll: ${specificRoll}`)
  if (specificRoll === face) {
    totalOfFace = totalOfFace + 1;
  }
}

console.log(`that's the total : ${totalOfFace}`)