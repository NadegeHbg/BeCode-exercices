// Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
// If the background is dark the text should be white, if the background is light the text should be black
// Find a way so that everytime you load the page the order of the elements changes!

let article = document.querySelector("main > article");
let learners = ["Jean", "Jacques", "Paul", "Louise", "Marie", "Thérèse"];

learners.sort(() => Math.random() - 0.5);

learners.forEach((learner) => {

    // create a section
    let section = document.createElement('section');
    // create a paragraphe
    let paragraph = document.createElement('p');
    // insert text in paragraph
    paragraph.innerText = learner
    // insert paragraph inside section
    section.appendChild(paragraph);
    // insert section inside article
    article.appendChild(section);
    // console.log(section)

    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;

    section.style.background = "rgb(" + r + ", " + g + ", " + b + ")"

    paragraph.style.color = ((0.3 * r) + (0.59 * g) + (0.11 * b) <= 128) ? '#FFF' : '#000';
})