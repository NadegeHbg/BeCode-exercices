const btnFetch = document.querySelector('.btn')
const main = document.querySelector('main')

let rulesArray = []

btnFetch.addEventListener('click', () => {
    const request = fetch('becode.json');
    console.log('Making the request:', request);

    const response = request.then(response => response.text())
    console.log('Treating the response', response); // Promise is pending

    response.then(text => {
        // console.log(typeof text);
        const rulesArray = JSON.parse(text)
        // console.log(rulesArray)

        const unorganisedList = document.createElement('ul');
        main.insertAdjacentElement("beforeend", unorganisedList);

        rulesArray.forEach(rule => {
            const item = document.createElement('li');
            unorganisedList.appendChild(item)
            item.innerText = rule
        })
    })
}, { once: true })
