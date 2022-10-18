// As always you should NOT edit the index.html, modify the script.js file :

// Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
// Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.
// Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.
// Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.

const inputFirstName = document.getElementById("firstname");
// console.log(inputFirstName);
const copyFirstName = document.getElementById("display-firstname");
// console.log(copyFirstName);

const inputAge = document.getElementById("age");
// console.log(inputAge);
const aHardTruth = document.getElementById("a-hard-truth");

const password = document.getElementById("pwd")
// console.log(password)
const passwordConfirm = document.getElementById("pwd-confirm")
// console.log(passwordConfirm)

const lightDarkToggle = document.getElementById("toggle-darkmode")
// console.log(lightDarkToggle)

const checkIfValid = () => {
    if (password.value.length < 6) {
        password.style.background = "tomato";
    }
    else {
        password.style.background = "white"
    }

    if (password.value !== passwordConfirm.value) {
        password.style.background = "tomato";
        passwordConfirm.style.background = "tomato";
    }
    else {
        password.style.background = "white"
        passwordConfirm.style.background = "white"
    }
}

inputFirstName.addEventListener("keyup", () => {
    // console.log(event);
    // console.log(inputFirstName.value);
    copyFirstName.innerText = inputFirstName.value;
})

inputAge.addEventListener("keyup", () => {
    // console.log(age)
    if (inputAge.value >= 18) {
        // console.log(inputAge.value)
        aHardTruth.style.visibility = "visible";
    }
    else {
        aHardTruth.style.visibility = "hidden";
    }
})

password.addEventListener("keyup", () => {
    // console.log(password.value)
    checkIfValid();
})

// PROBLEM : if first password is changed afterward, it doens't verify again
passwordConfirm.addEventListener("keyup", () => {
    // console.log(passwordConfirm.value)
    checkIfValid();
})


// Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.

// console.log(lightDarkToggle.value)
lightDarkToggle.addEventListener('change', () => {
    console.log(lightDarkToggle.value)
    if (lightDarkToggle.value === "light") {
        document.body.style.background = "white";
        document.body.style.color = "black";
    }
    else {
        document.body.style.background = "black";
        document.body.style.color = "white";
    }
})