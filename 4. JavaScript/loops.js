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
  return Math.floor(Math.random() * (max - min +1)) + min;
}

let n = getRandomIntInclusive(1, 50)
console.log(n)

for (let nombres = 0; nombres < n ; nombres++) {
    console.log(nombres)
}

