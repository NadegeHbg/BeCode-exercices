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

var a = 5
var b = 10
var c = 19

if( a > b && a > c ){
    console.log("Yes that's your very favorite number that's first : " + a)
} else if (b > a && b > c ){
    console.log("Mh it's only your second favorite number that's the biggest : " + b)
}
if(c > a && c > b){
    console.log("Your third favorite number is the biggest, maybe you should choose it as your favorite one : " + c)
}