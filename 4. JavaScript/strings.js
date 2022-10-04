// Concatenate

let a = "Je suis une phrase"
let b = "Je suis une autre phrase"

console.log(`Bonjour ${a} et ${b}`)

// Print in lowercase
const petiteLicorne = "JE VOUDRAIS ETRE UNE PETITE LICORNE"

function inLowerCase(text) {
    return text.toLowerCase()
}

console.log(inLowerCase(petiteLicorne))

// Print in uppercase

const grandeLicorne = "je voudrais être une grande licorne"

function inUpperCase(text) {
    return text.toUpperCase()
}

console.log(inUpperCase(grandeLicorne))

// Write a function which receives a name in this format "Doe, John" an returns it in this format "John Doe"

const name = "Doe, John"

function revertName(text) {
    // let stringToArrey = text.split(",");
    // console.table(stringToArrey)
    // stringToArrey.reverse("")
    // console.log(stringToArrey)
    // return stringToArrey.join(" ")

    return text.split(", ").reverse("").join(" ")
}

console.log(revertName(name))

// Write a function which receives a sentence full of whitespace and returns it without them.

whiteSpaceSentence = "                Bonjour.       Je ne sais pas trop où je suis. J'ai       perdu          beaucoup trop      de temps de ma vie              avec ces exercices !                 Et ce temps                  ne me sera                    jamais rendu ! J'espère              que vous            en êtes conscients !"

function removeWhiteSpace(text) {
    let stringToArrey = text.split(" ")
    // console.table(stringToArrey)

    const arrayWithoutSpace = stringToArrey.filter(element => {
        return element !== '';
    })
    // console.log(arrayWithoutSpace);

    return arrayWithoutSpace.join(" ")
}


console.log(removeWhiteSpace(whiteSpaceSentence))