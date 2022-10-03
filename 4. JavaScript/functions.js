// =======================================================================
// 1. Cinema tarifs 
// In a cinema the full tariff is 10 €, the reduced one is 8 €. 
// Write an algorithm which given a boolean indicating if the person can have a reduced tarif prints the price to pay.
// Define reduced tarif if age is max 12

// prompt age of visitor
// if age of visitor <= 12 then reduced price 
// if age is > 12 then price is 10
// =======================================================================

// let age = prompt("What's your age ?")

// if (age <= 12){
//     alert("You're 12 or less so the tarif is 8€ for you")
// }
// else{
//     alert("Since you're more than 12 it's gonna be 10€ for you")
// }

// =======================================================================
// 2. Maximum
// Write an algorithm which given 3 numbers finds the maximum.

// Ask 3 numbers -> out of the 3 :
// if a > b && a > c then print a
// if b > a && b > c then print b
// if c > a && c > b then print c
// =======================================================================

// var a = 5
// var b = 10
// var c = 19

// if( a > b && a > c ){
//     console.log("Yes that's your very favorite number that's first : " + a)
// } else if (b > a && b > c ){
//     console.log("Mh it's only your second favorite number that's the biggest : " + b)
// }
// if(c > a && c > b){
//     console.log("Your third favorite number is the biggest, maybe you should choose it as your favorite one : " + c)
// }

// =======================================================================
// 3.  Identical dice
// Write an algorithm which throws 3 dices and finds out the number of identical value, three, two or none.

// let have a dice of 6 faces ( 1 - 2 - 3 - 4 - 5 - 6)
// let roll that dice 3 times
// let see how many time it lends on the same number :
//  never, twice or three times
// =======================================================================

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min +1)) + min;
// }

// let dice1 = getRandomIntInclusive(1,6);
// let dice2 = getRandomIntInclusive(1,6);
// let dice3 = getRandomIntInclusive(1,6);

// console.log(dice1, dice2, dice3);

// if(dice1 === dice2 && dice1 === dice3 && dice2 === dice3){
//   console.log("Jackpot")
// } 
// else if (dice1 !== dice2 && dice1 !== dice3 && dice2 !== dice3){
//   console.log('Try again !')
// }
// else{
//   console.log("Nice it's been on the same number twice !")
// }

// =======================================================================
// 4. day’s number
// Write an algorithm which given the number of a day returns its name.
// =======================================================================

// let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// let d = new Date();
// let dayName = days[d.getDay()];
// console.log(dayName)

// =======================================================================
// 5. Print WaveShaperNode
// A print shop charges 0.12 € the ten first copy, 0.11 € the next 20 and 0.10 € from there. Write an algorithm which given a number of copies and calculates the price.
// let numberOfPages = nombre aléatoire
// if nombre <= 10 then x * 12cents
// if nombre > 10 && <= 20 then 10x12 + x-10 * 11 
// if nombre > 20 then 10*12 + 10*11 + x-20 * 10
// =======================================================================

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min +1)) + min;
// }

// let numberOfPages = getRandomIntInclusive(1,250)
// console.log(numberOfPages)

// if (numberOfPages >= 1 && numberOfPages <= 10){
//    let total = numberOfPages * 0.12;

//   console.log(total) 
// }
// else if(numberOfPages > 10 && numberOfPages <= 20){
//   let total = 10 * 0.12 + (numberOfPages - 10 )* 0.11;

//   console.log(total)
// }
// else if(numberOfPages > 20){
//   let total = 10 * 0.12 + 10 * 0.11 + (numberOfPages - 20) * 0.10;

//   console.log(total)
// }
// else{
//   console.log("Qu'est-ce que tu me veux ouesh? ")
// }
