// ====================================================
// First exercise
// ====================================================

console.log("Cékonekté");

let random = Math.floor(Math.random() * 255) + 1;
let randomb = Math.floor(Math.random() * 255) + 1;
let randomc = Math.floor(Math.random() * 255) + 1;

let title = document.querySelector('title');
let corpse = document.getElementById('body')
console.log(title)


document.body.style.background = "rgb(" + random + ", " + randomb + ", " + randomc + ")";
// document.body.style.background = "coral"

for (const child of corpse.children) {
    console.log(child);
}