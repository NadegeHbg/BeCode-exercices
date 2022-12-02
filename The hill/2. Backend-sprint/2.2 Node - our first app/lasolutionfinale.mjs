console.log(1);

let bloqué = []

for (let index = 0; index < 3000000000000000000000000000; index++) {
    bloqué.push([index]);
}

new Promise((resolve, reject) => {
    console.log(2)
    setTimeout(() => {
        resolve();
    }, 3000);
})
    .then(() => {
        console.log(3);
    })

console.log(4)
// runtime et fonctionnalités javascript 