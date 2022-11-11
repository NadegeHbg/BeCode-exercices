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

const getStuffsFromAPI = async (nameToCheck, countryToCheck) => {
    let response = await fetch('https://api.agify.io/?name=' + nameToCheck + '&country_id=' + countryToCheck)
    // console.log(response)
    let stuffFromAPI = await response.json();
    // console.log(stuffFromAPI)
    // return stuffFromAPI
    createDiv(nameToCheck, stuffFromAPI)
    localStorage.setItem(`research_${nameToCheck}_${countryToCheck}`, JSON.stringify(stuffFromAPI));
}
+
    btnFetch.addEventListener('click', () => {

        const nameToCheck = nameFromUser.value.toLowerCase();
        // console.log(nameToCheck);
        const countryToCheck = countryFromUser.value;

        const nameResearched = localStorage.getItem(`research_${nameToCheck}_${countryToCheck}`)

        if (nameResearched != null) {
            // console.log(nameResearched)
            let json = JSON.parse(nameResearched)
            // console.log(json)
            createDiv(nameToCheck, json)
        } else {
            console.log('fetch from api')
            getStuffsFromAPI(nameToCheck, countryToCheck)
        }
    })