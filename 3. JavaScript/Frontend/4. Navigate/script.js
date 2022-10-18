// Modify the script.js, do not create any new nodes!


// Select the last child of the <ol> tag and put it at the beginning of the list

const organisedList = document.querySelector("ol");
// console.log(organisedList);
// console.table(organisedList);

// const lastChildOL = organisedList.lastChild
// console.table(lastChildOL);

const lastChildOL = organisedList.lastElementChild
// console.log(lastChildOL.innerText);

organisedList.insertBefore(lastChildOL, organisedList.children[0])

// Move the <h2> of the third section in the second one and vice-versa
const main = document.querySelector("main");
// console.log(main);

const secondSection = main.children[1];
// console.log(secondSection);
const thirdSection = main.lastElementChild;
// console.log(thirdSection);

const divThirdSection = thirdSection.firstElementChild;

const secondTitle = document.querySelector("div > h2")
// console.log(thirdTitle)
const thirdTitle = secondSection.firstElementChild;
// console.log(secondTitle);

// swap the two titles
secondSection.insertBefore(secondTitle, secondSection.children[0]);
divThirdSection.insertBefore(thirdTitle, divThirdSection.children[0]);

// Delete the last section from the DOM, we don't need it anyways
main.removeChild(thirdSection)