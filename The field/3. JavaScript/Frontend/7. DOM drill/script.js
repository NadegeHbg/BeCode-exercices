// const confirmHorreur = confirm("If removeNode used after duplicate then it's working fine BUT if removedNode used after duplicate && shuffle, one duplicata stays except if you use remove twice ... Good luck with that ! LA METHODE A UNE FAILLE ! Je répète : LA METHODE A UNE FAILLE ! Comment ça je parle toute seule ? Non pas du tout ...")
// // console.log(confirmHorreur)

// if (confirmHorreur === false) {
//     alert("That's too bad, you'll never know what you're missing ... You really should accept");
//     document.body.innerHTML = 'JE TE JURE QUE TU DEVRAIS ACCEPTER ! Tout ça pour du childNodes Kappa';
//     document.body.style.background = "tomato";
//     document.body.style.color = "white";
// }
// else {
const div = document.createElement("div");
const select = document.createElement("select")
const option1 = document.createElement("option")
const option2 = document.createElement("option")

const unorganisedList = document.querySelector('ul');
// console.log(unorganisedList);
const childNodes = unorganisedList.childNodes;
// console.log(childNodes)

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

const removeNode = (childNodes) => {
    for (let index = 0; index < childNodes.length; index++) {
        const element = childNodes[index];

        if (element.nodeType !== 1) {
            continue;
        }

        for (let i = 0; i < childNodes.length; i++) {
            if (i != index && element.isEqualNode(childNodes[i])) {
                // console.log(`Il y a une similarité entre ${childNodes[i].innerText} et ${childNodes[i].innerText}`)
                // console.log(childNodes[i])
                let oldChild = unorganisedList.removeChild(childNodes[i]);
                // console.log(oldChild);
            }
        }
    }
}

document.body.insertBefore(div, document.body.children[1])
div.append(select)
option1.value = "Important franchises";
option1.text = option1.value;
option2.value = "Normal franchises";
option2.text = option2.value;
// console.log(option1)
// console.log(option2)
select.append(option2, option1);
// console.log(select)

select.addEventListener('change', () => {
    if (select.value === "Important franchises") {
        for (let index = 0; index < childNodes.length; index++) {
            const element = childNodes[index];

            if (element.nodeType !== 1) {
                continue;
            }
            // console.log(element)
            // masque tous les éléments de la page sauf, ceux qui ont la classe .important
            if (!element.classList.contains("important")) {
                element.style.visibility = 'hidden'
            }
        }
    }
    else {
        for (let index = 0; index < childNodes.length; index++) {
            const element = childNodes[index];

            if (element.nodeType !== 1) {
                continue;
            }
            // console.log(element)
            // masque tous les éléments de la page sauf, ceux qui ont la classe .important
            element.style.visibility = 'visible'
        }
    }
})

for (let index = 0; index < childNodes.length; index++) {
    const element = childNodes[index];
    // console.log(element)
    if (element.nodeType !== 1) {
        continue;
    }

    // console.log(`dissiz element ${element} / with type : ${typeof element} / with the text : ${element.innerText}`)

    if (element.innerText.includes(fastNfurious)) {
        // console.log(element.innerText)
        const firstBeFast = element
        unorganisedList.insertBefore(firstBeFast, unorganisedList.children[0]);

        firstBeFast.classList.add("important")
        // console.log(firstBeFast)
    }

    element.addEventListener('click', () => {
        if (element.innerText.includes(fastNfurious)) {
            alert(`The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family`)
        }
        else {
            alert(`This is : ${element.innerText}`)
        }
    })

}

// eventlistener on keyup 
document.addEventListener('keyup', (event) => {
    const childNodes = unorganisedList.childNodes
    switch (event.code) {
        case 'KeyR':
            // console.log("r pressed")
            shuffleElements(childNodes)
            letFastbeFirst(childNodes);
            break;
        case 'KeyD':
            // console.log("d pressed")
            duplicateFnF(childNodes)
            break;
        case 'KeyC':
            // console.log("C pressed")
            removeNode(childNodes)
    }
})
// }