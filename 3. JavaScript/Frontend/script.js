// ====================================================
// First exercise
// ====================================================

// console.log("Cékonekté");

// let random = Math.floor(Math.random() * 255) + 1;
// let randomb = Math.floor(Math.random() * 255) + 1;
// let randomc = Math.floor(Math.random() * 255) + 1;

// let title = document.querySelector('title');
// let corpse = document.getElementById('body')
// console.log(title)


// document.body.style.background="rgb("+ random + ", " + randomb + ", " + randomc + ")" ;
// document.body.style.background="coral"

// for (const child of corpse.children) {
//     console.log(child);
//   }

// ====================================================
// // Second exercise
// Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
// ====================================================

// Add a title attribute to every element that has the important class, stating This is an important item. Tip: adding a title attribute to an element is different from changing the title of a document.
// element.setAttribute("style", "background-color: blue;");  

let important = document.querySelectorAll(".important");
// console.log(important);

let image = document.querySelectorAll("img");
// console.log(image)

let paragraph = document.querySelectorAll("p")
// console.log(paragraph)

// verify if has a class and apply random color
function hasNotAClass(element) {
    let random = Math.floor(Math.random() * 255) + 1;
    let randomb = Math.floor(Math.random() * 255) + 1;
    let randomc = Math.floor(Math.random() * 255) + 1;


    if (element.classList.length === 0) {
        element.style.color = "rgb(" + random + ", " + randomb + ", " + randomc + ")"
    }
}

// important[0].setAttribute("title", "This is an important item")
// console.log(important[0])

important.forEach((box, index) => {
    box.setAttribute("title", "This is an important item");
    // console.log(important[index])
});

// Select all the img tags and loop through them. If they have no important class, turn their display property to none

image.forEach((element) => {
    if (!element.classList.contains("important")) {
        element.style.display = "none";
    }
}
)

// Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well

paragraph.forEach((element) => {
    // console.log(element.classList.length)
    let listOfClass = element.classList
    // if (element.classList.length !== 0) {
    //     console.log(element.innerText)
    //     console.log(element.classList)
    // }
    // else {
    //     console.log(element.innerText)
    // }

    console.log(element.innerText);
    listOfClass.forEach(containClass => {
        console.log(`"${element.innerText}" has this class : ${containClass}`)
    });
    hasNotAClass(element);
})

// Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
