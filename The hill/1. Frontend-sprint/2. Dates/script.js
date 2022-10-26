// Exercise 1
// Find the timezones of :

// Anchorage (USA)
// Reykjavik (Iceland)
// Saint-Petersburg (Russia)
// And display the date and time of these cities along with the time and date of Brussels.

const Bruxelles = document.getElementById('Bruxelles');
const Anchorage = document.getElementById('Anchorage');
const Reykjavik = document.getElementById('Reykjavik');
const SaintPetersbourg = document.getElementById('Saint-Petersbourg');

// const date = new Date()
// console.log(date)
// const timeBx = date.toLocaleString()
// console.log(timeBx)

// Bruxelles.innerText = timeBx

const dateBruxelles = () => {
    const date = new Date();
    // console.log(date)
    const timeBx = date.toLocaleString();
    // console.log(timeBx)
    Bruxelles.innerText = timeBx
}

const dateAnchorage = () => {
    const date = new Date();
    const timeAncho = date.toLocaleString('fr-BE', { hour12: false, timeZone: 'America/Anchorage' });
    Anchorage.innerText = timeAncho
}

const dateReykjavik = () => {
    const date = new Date();
    const timeReykja = date.toLocaleString('fr-BE', { hour12: false, timeZone: 'Atlantic/Reykjavik' });
    Reykjavik.innerText = timeReykja
}

const dateStPeter = () => {
    const date = new Date();
    const timeStPeter = date.toLocaleString('fr-BE', { hour12: false, timeZone: 'Europe/Moscow' });
    SaintPetersbourg.innerText = timeStPeter
}

dateBruxelles();
setInterval(dateBruxelles, 1000);
dateAnchorage();
setInterval(dateAnchorage, 1000);
dateReykjavik();
setInterval(dateReykjavik, 1000);
dateStPeter();
setInterval(dateStPeter, 1000);

// Exercise 2
// Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?

// Write a function to find how many days have passed since any point in time (after 1970).

const dateOfBirth = document.getElementById('dateOfBirth');

const howManyDays = () => {
    const birth = new Date('02/03/1994');
    const today = new Date();
    // console.log(birth);
    // console.log(today);

    let difference = today.getTime() - birth.getTime();
    // console.log(difference);

    let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
    dateOfBirth.innerText = totalDays
}

howManyDays();
setInterval(howManyDays, 86400);


// Exercise 3
// Using timestamps, find the exact time and date we will be in 80000 hours.

// Write a function to display the time and date for any amount of hours given in the future. Create a number input for the hours and listen for keyup events, dynamically display the date in the number of hours given by the input.

const inALongTime = document.getElementById('inALongTime');
const numberFromUser = document.getElementById('numberFromUser');
const result = document.getElementById('result');

const timeInFuture = (timePassBy) => {
    const todayTime = Date.now()
    // console.log(todayTime);
    // console.log(typeof todayTime);
    const timeStamp = Date.now() + 1000 * 60 * 60 * timePassBy
    // console.log(timeStamp);
    const whenWillWeBe = new Date(timeStamp)
    // console.log(whenWillWeBe);

    const inAReadableWay = whenWillWeBe.toLocaleString()

    inALongTime.innerText = inAReadableWay
}

// setInterval(function () { timeInFuture(80000) }, 1000)
timeInFuture(80000);
setInterval(timeInFuture, 1000, 80000);

numberFromUser.addEventListener('keyup', () => {
    // console.log('someone is writing');
    // console.table(numberFromUser);
    // console.log(numberFromUser.valueAsNumber);
    let userChoice = numberFromUser.valueAsNumber;
    // console.log(userChoice);

    const todayTime = Date.now();
    // console.log(todayTime);
    // console.log(typeof todayTime);
    const timeStamp = Date.now() + 1000 * 60 * 60 * userChoice;
    // console.log(timeStamp)
    const whenWillWeBe = new Date(timeStamp);
    // console.log(whenWillWeBe);

    const inAReadableWay = whenWillWeBe.toLocaleString();

    result.innerText = inAReadableWay;
})

// Exercise 4
// Using HTML, CSS (and javascript, of course) reproduce the following picture. This should be centered both horizontaly and vertically in your page.

const dayInLetter = document.getElementById('dayInLetter');
const dayInNumber = document.getElementById('dayInNumber');
const month = document.getElementById('month');
const year = document.getElementById('year');
const hours = document.getElementById('hour');
const sec = document.getElementById('sec');


const calendar = () => {
    const dateNow = new Date();
    // console.log(dateNow);

    let optionsDay = { weekday: 'short' }
    const dayNowInLetter = Intl.DateTimeFormat('en-US', optionsDay).format(dateNow);
    // console.log(dayNowInLetter);
    dayInLetter.innerText = dayNowInLetter;

    const dayNowInNumber = String(dateNow.getDate()).padStart(2, "0");
    // console.log(dayNowInNumber);
    dayInNumber.innerText = dayNowInNumber;

    let optionsMonth = { month: 'short' }
    const monthNow = Intl.DateTimeFormat('en-US', optionsMonth).format(dateNow);
    // console.log(monthNow);
    month.innerText = monthNow;

    const yearNow = dateNow.getFullYear();
    // console.log(yearNow);
    year.innerText = yearNow;

    const hour = String(dateNow.getHours()).padStart(2, "0");
    // console.log(hour)
    const min = String(dateNow.getMinutes()).padStart(2, "0");
    // console.log(min)
    hours.innerText = `${hour}:${min}:`

    const secs = String(dateNow.getSeconds()).padStart(2, "0");
    sec.innerText = secs
}

calendar();
setInterval(calendar, 1000);