// ========================================================
// 1. Print an Array
// Write an algorithm which prints everything in an array
// ========================================================

// let liste = ['OBS', 'streamdeck', 'animations', 'lioranboard']
// console.table(liste)

// liste.forEach(function (item) {
//     console.log(item)
// })

// for (let i = 0; i < liste.length; i++) {
//     const element = liste[i];

//     console.log(element)
// }

// ========================================================
// 2. Maximum
// Write an algorithm which receives an array of integers and prints its maximum.
// 3. Minimum
// Write an algorithm which receives an array of integers and prints its minimum.
// ========================================================

// nombres = [10, 40, 32, -48, 5]
// console.table(nombres)

// pour trouver le plus grand nombre : 
// compare [1] avec [2] 
// si 1 < 2 then 1 = 2 else 1 = 1
// compare 2 avec 3 
// si 2 < 3 then 2 = 3 
// ...

// let max = Number();
// console.log(max)

// nombres.forEach((item) => {
//     if (item > max) {
//         max = item
//     }
// })
// console.log(max)
// console.log(Math.max(...nombres))

// =======================================================

// nombres = [10, 40, 32, 48, 5]

// let min = Number();

// nombres.forEach((item) => {
//     if (item > min) {
//         min = item
//     }
// })
// console.log(min)

// console.log(Math.min(...nombres))

// =======================================================
// 4. minimum position
// Write an algorithm which receives an array of integers and prints the position of its minimum.
// =======================================================

// nombres = [10, 40, 32, 48, 5]

// find the minimum number
// print the index of the number in the array

// let min = Math.min(...nombres)
// let indexMin = nombres.indexOf(min)

// console.log(indexMin)
// console.log(nombres.indexOf(Math.min(...nombres)))

// =======================================================
// 5 ordered array
// Write a algorithm which receives an array of integers and check if its ordered ascendantly. Print true if the array is ordered, false if it’s not.

// for each item check if the following item is bigger or not
// if it is for all, then the list is ordered
// if it is not for all, then the list is unordered
// =======================================================

// let listOrdered = [1, 2, 3, 4, 5]
// let listUnordered = [5, 3, 2, 4, 95]

// function checkIfOrdered(array) {
//     for (i = 0; i < array.length; i++) {
//         if (i + 1 > array.length) {
//             break;
//         }
//         if (array[i] > array[i + 1]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(checkIfOrdered(listOrdered));
// console.log(checkIfOrdered(listUnordered));