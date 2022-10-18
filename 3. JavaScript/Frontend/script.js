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
// Add a title attribute to every element that has the important class, stating This is an important item. Tip: adding a title attribute to an element is different from changing the title of a document.
// Select all the img tags and loop through them. If they have no important class, turn their display property to none
// Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
// Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
// ====================================================

// element.setAttribute("style", "background-color: blue;");  

let important = document.querySelectorAll(".important");
console.log(important);

let image = document.querySelectorAll("img");
console.log(image)

// important[0].setAttribute("title", "This is an important item")
// console.log(important[0])

important.forEach((box, index) => {
    box.setAttribute("title", "This is an important item");
    console.log(important[index])
  });

image.forEach((element) => {
    if(!element.classList.contains("important")){
        element.style.display="none";
    }
}
)