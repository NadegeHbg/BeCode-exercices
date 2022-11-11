const btnFetch = document.querySelector('.btn')
const main = document.querySelector('main')

const nameFromUser = document.querySelector('#nameFromUser')
// console.table(nameFromUser)
const countryFromUser = document.querySelector('#countryFromUser')
// console.table(countryFromUser)

const createDiv = (nameToCheck, json) => {
    const newDiv = document.createElement('div');
    const subtitle = document.createElement('h2');
    const paragrapheOne = document.createElement('p');
    const paragrapheTwo = document.createElement('p');
    const paragrapheThree = document.createElement('p');

    subtitle.innerText = nameToCheck;
    subtitle.classList.add('capitalize');
    paragrapheOne.innerText = `Age : ${json.age}`;
    paragrapheTwo.innerText = `Number of ${nameToCheck} taken into account : ${json.count}`;
    newDiv.append(subtitle, paragrapheOne, paragrapheTwo, paragrapheThree);
    main.insertAdjacentElement("beforeend", newDiv);
}

btnFetch.addEventListener('click', () => {

    const nameToCheck = nameFromUser.value;
    // console.log(nameToCheck);
    const countryToCheck = countryFromUser.value;

    const fetchName = (name, country) => fetch('https://api.agify.io/?name=' + name + '&country_id=' + country)
    const nameResearched = localStorage.getItem(`research_${nameToCheck}_${countryToCheck}`)

    if (nameResearched != null) {
        // console.log(nameResearched)
        let json = JSON.parse(nameResearched)
        // console.log(json)
        createDiv(nameToCheck, json)
    } else {
        console.log('fetch from api')
        fetchName(nameToCheck, countryToCheck)
            .then(response => response.json())

            .then(json => {
                console.log(json)
                console.log(typeof json)
                createDiv(nameToCheck, json)

                localStorage.setItem(`research_${nameToCheck}_${countryToCheck}`, JSON.stringify(json));
                // console.log(typeof JSON.stringify(json))
                // console.log(JSON.stringify(json))
            })
            .catch(error => {
                console.log('There was an error!', error)
            })
    }
})