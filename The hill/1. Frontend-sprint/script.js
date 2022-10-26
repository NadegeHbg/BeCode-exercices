console.log("it's connected")

// // Exercise 1
// // Write a function that mimics the behaviour of a typewriter.

// // Using setInterval display the word prout one character at a time (one letter per second). Once the word is written on the screen clear the interval.

// const btnProut = document.getElementById('btnProut')
// const proutSect = document.getElementById('proutSect')
// // console.log(btnProut)
// const prout = 'Prout';
// const proutArray = prout.split('');
// // console.log(proutArray);
// const div = document.createElement('div');
// proutSect.append(div)


// // const typewriter = () => {
// //     if (proutArray.length > 0) {
// //         div.innerHTML += proutArray.shift()
// //     }
// //     else {
// //         clearInterval;
// //     }
// // }

// // setInterval(typewriter, 1000)

// btnProut.addEventListener('click', () => {
//     setInterval(() => {
//         if (proutArray.length > 0) {
//             div.innerHTML += proutArray.shift()
//         }
//         else {
//             clearInterval;
//         }
//     }, 1000);
// })

// // Exercise 2
// // Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.

// let seconds = document.getElementById('sec')
// let sec = 0
// let minutes = document.getElementById('min')
// let min = 0

// setInterval(() => {
//     sec++
//     // console.log(sec)
//     if (sec >= 60) {
//         sec = 0
//         min++
//         // console.log(min)
//     }
//     // console.log(typeof sec)
//     // console.log(`time elap/sed ${sec}`)
//     seconds.innerHTML = (`Let count to ${sec}`)
//     minutes.innerHTML = (`And thet's how many time you succeeded to count to 60 : ${min}`)
// }, 1000);


// =====================================================
// Whack a mole
// every X secondes, one of the circle change color
// =====================================================

const circles = document.getElementsByClassName('cercle')
// console.log(circles)
const score = document.getElementById('score')
let scoreTotal = 0

// get a random circle

const randomCircle = () => {
    const circle = circles[Math.floor(Math.random() * circles.length)]
    // console.log(circle)
    circle.classList.toggle("redCircle") /*toggle uniquement si le cercle random est rechoisi => sur la bonne voie, mais à modifier*/

    circle.addEventListener('click', () => {
        if (circle.classList.contains("redCircle")) {
            circle.classList.toggle("redCircle")
            scoreTotal++
            score.innerHTML = `${scoreTotal}`
        } else {
            scoreTotal--
            score.innerHTML = `${scoreTotal}`

        }
        // => if is working because clicking on the random circle but else is not because the others circles aren't selected in this case ... So it's needed to put the add event listener outside of the function. Set the addEventListener on the HTML collection ... 
    })
}


setInterval(randomCircle, 2000)