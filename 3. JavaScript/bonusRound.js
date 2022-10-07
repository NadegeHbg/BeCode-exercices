// Make a program that generates an integer between 1 and 100 (don't display it to the user).
// Then the program should display "Guess the number" and ask the user to guess. If the user enters a number which is too low it should display "Too low" and re-ask the question. If the user enters a number which is too high it should display "Too high" and re-ask the question. If the user guess correctly it should display "Well guessed!" and exit.

// * generate a random number
// * prompt a question that ask the number
// * check if the answer is the same as the random number
// * if answer too low - alert answer too low
// * retry
// * else if answer too high - alert answer too high
// * retry
// * else if answer correct - alert well guessed!
// * once answer is correct exit

let randomNumber = getRandomIntInclusive(1, 100)

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNumber)

let guess = function () {
    rl.question('Guess the number', function (tryPlayer) {
        if (tryPlayer != randomNumber) {
            if (tryPlayer < randomNumber) {
                console.log("Too small, try again");
            }
            else if (tryPlayer > randomNumber) {
                console.log("Too big, try again");
            }
            guess()
        }
        else if (tryPlayer == randomNumber) {
            console.log("Well guess");
            return rl.close();
        }
        else {
            console.log("Gépokompri")
            guess()
        }
    })
}

guess()

// Make a program that asks for an integer n and generates the n first Fibonacci numbers.

// Yes, you'll have to search what the hell are Fibonacci numbers.
// Fibonacci number => n = n-1 + n-2

// hint: recursion recursion recursion 😉