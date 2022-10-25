// Everytime the user clicks on one of the action squares

const displayedSquareWrapper = document.querySelector(".displayedsquare-wrapper");
// console.log(displayedSquareWrapper)
const ul = document.querySelector("ul");
// console.log(ul)
const body = document.querySelector("body")
// console.log(body)

const _initTime = Date.now();

const getElapsedTime = () => {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
    // console.log(e.target.classList[1]);
    // console.log(getElapsedTime());

    // create a new div
    const div = document.createElement("div");

    div.addEventListener("click", (e) => {
        alert(e.target.classList[1])
    })



    displayedSquareWrapper.appendChild(div);
    // give them a class
    div.classList.add("displayedsquare");
    // give the corresponding clicked color
    div.classList.add(e.target.classList[1]);

    // Create a new <li>
    actionLog(`[${getElapsedTime()}] created a new ${e.target.classList[1]} square`)
}

//  When the spacebar is hit randomly change the background color of the whole page


const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
    actionSquare.addEventListener('click', clickOnSquare);
}

function randomColor() {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;

    return "rgb(" + r + ", " + g + ", " + b + ")"

}

function actionLog(message) {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = message
}

function deleteElements(elementToEmpty) {
    while (elementToEmpty.firstChild) {
        elementToEmpty.removeChild(elementToEmpty.firstChild)
    }
}

document.addEventListener("keydown", (event) => {
    // console.log(event)
    switch (event.code) {
        case "Space":
            // console.log("cétéspace");
            // random background color on space press
            body.style.background = randomColor()
            // log on space press

            actionLog(`[${getElapsedTime()}] created a new ${event.code} Keyboard`)
            break;

        case "KeyL":
            console.log(typeof ul)
            // console.log("Du plomb dans l'L");
            //  When the l key is pressed the log gets deleted
            deleteElements(ul)

            // ul.innerHTML = ''

            break;
        case "KeyS":
            // console.log("Ssssssss");
            // When the s key is pressed the generated squares get deleted
            deleteElements(displayedSquareWrapper)
            break;
        default:
            break;
    }
})

// Create a system so that when a user clicks on a generated square an alert pops-up 
// with the color of that square



// container.insertAdjacentHTML('beforeend', event.target.outerHTML)