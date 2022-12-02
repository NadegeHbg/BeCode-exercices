// Compréhension de l'ordre des exécutions du code en JS 

console.log(1);

let bloqué = []



new Promise((resolve, reject) => {
    console.log(2)
    setTimeout(() => {
        resolve();
    }, 3000);
})
    .then(() => {
        console.log(3);
    })

for (let index = 0; index < 3000000000000000000000000000; index++) {
    bloqué.push([index]);
}

console.log(4)
// runtime et fonctionnalités javascript 