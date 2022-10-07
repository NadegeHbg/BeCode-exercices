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
// =================================

// let randomNumber = getRandomIntInclusive(1, 100)

// let readline = require('readline');
// let rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(randomNumber)

// let guess = function () {
//     rl.question('Guess the number', function (tryPlayer) {
//         if (tryPlayer != randomNumber) {
//             if (tryPlayer < randomNumber) {
//                 console.log("Too small, try again");
//             }
//             else if (tryPlayer > randomNumber) {
//                 console.log("Too big, try again");
//             }
//             guess()
//         }
//         else if (tryPlayer == randomNumber) {
//             console.log("Well guess");
//             return rl.close();
//         }
//         else {
//             console.log("Gépokompri")
//             guess()
//         }
//     })
// }

// guess()

// =================================

// Make a program that asks for an integer n and generates the n first Fibonacci numbers.

// Yes, you'll have to search what the hell are Fibonacci numbers.
// Fibonacci number => n = n-1 + n-2

// hint: recursion recursion recursion 😉
// =================================

// créer un tableau Fibonacci initialisé avec [0, 1]
// n = le nombre de chiffres de Fibonacci à print
// On va devoir faire un calcul wtf pour calculer tous les chiffres du tableau jusqu'au nième donné
// Rajouter tous les chiffres calculés dans le tableau 
// Print la liste de chiffres du tableau jusqu'au nième
// Par exemple : n = 5
// on va calculer jusqu'au 5ème chiffre de la suite
// ajouter tous les chifres au tableau
// nouveau tableau = [0, 1, 1, 2, 3]
// print tableau 0, 1, 1, 2, 3

// let readline = require('readline');
// let rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let suiteFibonacci = [0, 1];

// let proposition = function () {
//     rl.question('How many numbers of Fibonacci do you want to know ?', function (input) {
//         if (input > 2) {
//             for (let i = 2; i < input; i++) {
//                 // === calcul wtf : ===    
//                 // part de chiffres du tableau (initialisé à [0, 1] et donc i=2)    
//                 //  -> calcule le n3 => i2 = n3 = n-1 + n-2 = i-1 + i-2
//                 let newNumber = suiteFibonacci[i - 1] + suiteFibonacci[i - 2]

//                 // console.log(suiteFibonacci[i - 1])
//                 // console.log(suiteFibonacci[i - 2])    
//                 //   -> rajoute ce n3 au tableau

//                 suiteFibonacci.push(newNumber)
//                 //    -> depuis 0 et 1 calcule tous les chiffres de la suite jusqu'au nième 
//                 // incrémente i++ => n = i-1 + i-2
//             }
//             console.log(suiteFibonacci)
//             return rl.close();
//         }
//         else if (input > 0 && input <= 2) {
//             if (input == 1) {
//                 let first = suiteFibonacci.shift()
//                 console.log(first)
//             } else {
//                 console.log(suiteFibonacci)
//             }
//             return rl.close();
//         }
//         else {
//             console.log("I don't understand, try again please")
//             proposition()
//         }
//     })
// }

// proposition()

// =================================
// Make an interactive program to manager your favorite pizza flavors. When launched it must display a menu of this style:
// =================================

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let flavors = []

let menuChoice = function () {
    rl.question('', function (choice) {
        // no comprendo por que choice ne trigger pa les autres questions ... Vérifier readline si il y a un autre moyen de prompt ... Over for today
        switch (choice) {
            // list all the pizza flavors
            case 1:
                console.table(flavors)
                menuChoice()
            case 2:
                rl.question('Add a new pizza flavor', function (input) { })
                menuChoice()
            case 3:
                rl.question('How many numbers of Fibonacci do you want to know ?', function (input) { })
                menuChoice()
            case 4:

                return rl.close();
            default:
                break;
        }
    })
}
menuChoice()