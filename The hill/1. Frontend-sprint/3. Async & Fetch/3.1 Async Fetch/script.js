const btnFetch = document.querySelector('.btn')
const main = document.querySelector('main')

let rulesArray = []

btnFetch.addEventListener('click', () => {
    const request = fetch('becode.json');
    console.log('Making the request:', request);

    const response = request.then(response => response.json())
    console.log('Treating the response', response); // Promise is pending

    response.then(json => {
        // console.log(typeof json);
        // const rulesArray = JSON.parse(text)
        // console.log(rulesArray)

        const unorganisedList = document.createElement('ul');
        main.insertAdjacentElement("beforeend", unorganisedList);

        json.forEach(rule => {
            const item = document.createElement('li');
            item.innerText = rule;
            unorganisedList.appendChild(item);
        })
    })
}, { once: true })
