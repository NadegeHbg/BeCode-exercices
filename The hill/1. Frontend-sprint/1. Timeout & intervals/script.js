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
// =====================================================

const circles = document.querySelectorAll('.cercle')
// console.log(circles)
const score = document.getElementById('score')
let scoreTotal = 0
const btnStart = document.getElementById('btnStart')

// get a random circle

// console.log(circles)

const randomCircle = () => {
    circles.forEach(circle => {
        // console.log(circle)
        circle.classList.remove('redCircle')

    });
    const pickRandomCircle = circles[Math.floor(Math.random() * circles.length)]
    // console.log(pickRandomCircle)
    pickRandomCircle.classList.add('redCircle')
}

const intervalCircle = () => {
    setInterval(randomCircle, 2000)
}

circles.forEach(circle => {
    circle.addEventListener('click', () => {
        if (circle.classList.contains('redCircle')) {
            scoreTotal++
            // console.log(scoreTotal)
            score.innerHTML = `${scoreTotal}`
            circle.classList.remove('redCircle')
        }
        else {
            scoreTotal--
            score.innerHTML = `${scoreTotal}`
        }
    })
});



btnStart.addEventListener('click', () => {
    intervalCircle()
}, { once: true })