// (*) Remove duplicates using removeChild (duplicates are items with the exact same textContent, isEqualNode might be useful).
// (*) Modify the previous function so that when you press the letter d of your keyboard, the Fast and Furious element gets cloned
// Create a new <div> before the list, using createElement and insertBefore
// Using createElement, create a <select> tag into the previously created <div>, with two <option>s in it: "important franchises" and "normal franchises"
// Add an eventListener to the <select>, on change, if the option "important franchise" is chosen, only display items of the list that have the class .important. (hint: you can toggle visibility using element.style.visibility = 'hidden')

const unorganisedList = document.querySelector('ul');
// console.log(unorganisedList);
const childNodes = unorganisedList.childNodes;
// console.log(childNodes)
// console.log(typeof childNodes)
const fastNfurious = 'Fast and Furious'

const letFastbeFirst = (childNodes) => {
    for (let index = 0; index < childNodes.length; index++) {
        const element = childNodes[index];

        if (element.nodeType !== 1) {
            continue;
        }

        if (element.innerText.includes(fastNfurious)) {
            // console.log(element.innerText)
            const firstBeFast = element
            unorganisedList.insertBefore(firstBeFast, unorganisedList.children[0]);

            firstBeFast.classList.add("important")
            // console.log(firstBeFast)
        }
    }
}
const shuffleElements = (childNodes) => {
    for (let index = 0; index < childNodes.length; index++) {
        const element = childNodes[index];

        if (element.nodeType !== 1) {
            continue;
        }

        unorganisedList.appendChild(childNodes[Math.floor(Math.random() * index)]);
    }
}
const duplicateFnF = (childNodes) => {
    for (let index = 0; index < childNodes.length; index++) {
        const element = childNodes[index];

        if (element.nodeType !== 1) {
            continue;
        }
        if (element.innerText.includes(fastNfurious)) {
            const Clone = element.cloneNode(true)
            // console.log(Clone)
            element.after(Clone);
            break;
        }
    }
}


for (let index = 0; index < childNodes.length; index++) {
    const element = childNodes[index];
    // console.log(element)
    if (element.nodeType !== 1) {
        continue;
    }

    // console.log(`dissiz element ${element} / with type : ${typeof element} / with the text : ${element.innerText}`)

    letFastbeFirst(element);

    element.addEventListener('click', () => {
        if (element.innerText.includes(fastNfurious)) {
            alert(`The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family`)
        }
        else {
            alert(`This is : ${element.innerText}`)
        }
    })

}

// (*) Add an eventListener on the document body, listening for keyup. When pressing the r key of the keyboard the list should get sorted in a random order, however Fast and Furious should remain the first element (most important franchise ever, remember?)

document.addEventListener('keyup', (event) => {
    const childNodes = unorganisedList.childNodes
    switch (event.code) {
        case 'KeyR':
            // console.log("r pressed")
            shuffleElements(childNodes)
            letFastbeFirst(childNodes);
            break;
        case 'KeyD':
            console.log("d pressed")
            duplicateFnF(childNodes)
            break;
    }
})

// (*) Remove duplicates using removeChild (duplicates are items with the exact same textContent, isEqualNode might be useful).
const removeNode = (childNodes) => {
    for (let index = 0; index < childNodes.length; index++) {
        const element = childNodes[index];

        if (element.nodeType !== 1) {
            continue;
        }
    }
}