// ========================================================
// 1. Print an Array
// Write an algorithm which prints everything in an array
// ========================================================

let liste = ['OBS', 'streamdeck', 'animations', 'lioranboard']
// console.table(liste)

// $$$$ Function $$$$
function printEverything(array) {
    array.forEach((item) => {
        console.log(item)
    });
}

printEverything(liste)

// ========================================================
// 2. Maximum
// Write an algorithm which receives an array of integers and prints its maximum.
// 3. Minimum
// Write an algorithm which receives an array of integers and prints its minimum.
// ========================================================

nombresMax = [10, 40, 32, -48, 5]
// console.table(nombres)

// $$$$ Function $$$$
function getMax(array) {
    return Math.max(...array)
}

console.log(getMax(nombresMax))

// =======================================================

nombresMin = [10, 40, 32, 48, 5]

// $$$$ Function $$$$
function getMin(array) {
    return Math.min(...array)
}

console.log(getMin(nombresMin))

// =======================================================
// 4. minimum position
// Write an algorithm which receives an array of integers and prints the position of its minimum.
// =======================================================

nombres = [10, 40, 32, 48, 5]

// find the minimum number
// print the index of the number in the array

// $$$$ Function $$$$

function printMin(array) {
    return array.indexOf(Math.min(...array))
}

console.log(printMin(nombres))
// =======================================================
// 5 ordered array
// Write a algorithm which receives an array of integers and check if its ordered ascendantly. Print true if the array is ordered, false if it’s not.

// for each item check if the following item is bigger or not
// if it is for all, then the list is ordered
// if it is not for all, then the list is unordered
// =======================================================

let listOrdered = [1, 2, 3, 4, 5]
let listUnordered = [5, 3, 2, 4, 95]

function checkIfOrdered(array) {
    for (i = 0; i < array.length; i++) {
        if (i + 1 > array.length) {
            break;
        }
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(checkIfOrdered(listOrdered));
console.log(checkIfOrdered(listUnordered));