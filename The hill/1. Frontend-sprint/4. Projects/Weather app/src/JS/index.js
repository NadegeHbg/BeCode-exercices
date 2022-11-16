
import * as dotenv from 'dotenv'
import Chart from 'chart.js/auto'


const weatherKey = process.env.WEATHER_KEY
const unsplashKey = process.env.UNSPLASH_KEY

const form = document.querySelector('#form');
const sectionCityOne = document.querySelector('#sectionCityOne')
const sectionCityTwo = document.querySelector('#sectionCityTwo')

async function getCoordinatesByCityName(cityFromUser) {
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityFromUser}&limit=1&appid=${weatherKey}`)

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const city = await response.json();

    const lat = city[0].lat;
    const lon = city[0].lon;

    const coordinate = { latitude: lat, longitude: lon };
    return coordinate
}

async function getWeatherOfCity(coordinateCity) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinateCity.latitude}&lon=${coordinateCity.longitude}&appid=${weatherKey}&units=metric`)

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const weatherOfCity = await response.json();
    // console.log(weatherOfCity);

    let weatherByDay = [[], [], [], [], []];
    let i = 0;
    let c = 0;
    weatherOfCity.list.forEach(weatherEntry => {
        if (i < 8) {
            weatherByDay[c].push(weatherEntry);
        } else {
            c++
            weatherByDay[c].push(weatherEntry);
            i = 0
        }
        i++
    })
    return weatherByDay
}

async function getImgFromUnsplash(cityData) {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=city=${cityData}&orientation=landscape&client_id=${unsplashKey}`);

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const img = await response.json();

    return img.results[0].urls.regular
}

const createDOM = async (cityData, weatherCity) => {

    const urlImg = await getImgFromUnsplash(cityData)

    console.log(urlImg);

    const cityName = document.createElement("h2");
    const divWeatherWeek = document.createElement("div");

    cityName.innerText = cityData
    cityName.style.backgroundImage = `url('${urlImg}')`;

    cityName.classList.add('centerText', 'displayFlexColumn');
    divWeatherWeek.classList.add('weatherWeek', 'displayFlex');

    if (sectionCityOne.children.length === 0) {
        sectionCityOne.append(cityName, divWeatherWeek);
    }
    else {
        sectionCityTwo.append(cityName, divWeatherWeek);
    }

    // From here go to a loop that goes through all 5 days

    weatherCity.forEach(day => {

        // console.log(day[0]);

        const divWeatherCardDay = document.createElement("div");
        const dayOfWeek = document.createElement("h3");
        const descriptionOfWeather = document.createElement("p");
        const divIconeWeather = document.createElement("div");
        const iconeWeather = document.createElement("i");
        const divRealTemp = document.createElement("div");
        const titleRealTemp = document.createElement("h4");
        const realTemp = document.createElement("p");
        const divFeelTemp = document.createElement("div");
        const titleFeelTemp = document.createElement("h4");
        const feelTemp = document.createElement("p");
        const divSunshine = document.createElement("div");
        const titleSunshine = document.createElement("h4");
        const divSunFromTo = document.createElement("div");
        const timeFrom = document.createElement("p");
        const timeTo = document.createElement("p");

        // console.log(dayInLetter(day))
        dayOfWeek.innerText = dayInLetter(day)

        descriptionOfWeather.innerText = day[0].weather[0].description.toUpperCase()
        titleRealTemp.innerText = 'Real Temperature'
        realTemp.innerText = `${day[0].main.temp}°C`
        titleFeelTemp.innerText = 'Feels like'
        feelTemp.innerText = `${day[0].main.feels_like}°C`
        titleSunshine.innerText = 'Min & Max'
        timeFrom.innerText = `${day[0].main.temp_min}°C`
        timeTo.innerText = `${day[0].main.temp_max}°C`

        divWeatherCardDay.classList.add('weatherCardDay', 'displayFlexColumn');
        divRealTemp.classList.add('displayFlexColumn');
        divFeelTemp.classList.add('displayFlexColumn');
        divSunFromTo.classList.add('displayFlex');

        divWeatherWeek.append(divWeatherCardDay);
        divWeatherCardDay.append(dayOfWeek, descriptionOfWeather, divIconeWeather, divRealTemp, divFeelTemp, divSunshine);
        divIconeWeather.append(iconeWeather);
        divRealTemp.append(titleRealTemp, realTemp);
        divFeelTemp.append(titleFeelTemp, feelTemp);
        divSunshine.append(titleSunshine, divSunFromTo);
        divSunFromTo.append(timeFrom, timeTo);
    })
}

const dayInLetter = (day) => {
    let today = new Date(day[0].dt_txt)
    // console.log(today)
    let optionsDay = { weekday: 'long' }
    // console.log(optionsDay)
    const dayNowInLetter = Intl.DateTimeFormat('fr-BE', optionsDay).format(today);
    // console.log(dayNowInLetter)
    return dayNowInLetter.toUpperCase()
}
// Create object that is going to be reuse for the chart
const setDataArray = (weatherCity) => {
    dataCity = [];
    // console.log(weatherCity)
    weatherCity.forEach(day => {
        let data = { day: dayInLetter(day), temp: day[0].main.temp };
        dataCity.push(data);
    })
    return dataCity
}

async function createChart(cityOneFromUser, cityTwoFromUser, weatherCityOne, weatherCityTwo) {

    const dataCityOne = setDataArray(weatherCityOne);
    const dataCityTwo = setDataArray(weatherCityTwo);

    new Chart(
        document.getElementById('comparison'), {
        type: 'line',
        data: {
            labels: dataCityOne.map(row => row.day),
            datasets: [
                {
                    label: cityOneFromUser,
                    data: dataCityOne.map(row => row.temp),
                    // borderColor: Utils.CHART_COLORS.orange,
                },
                {
                    label: cityTwoFromUser,
                    data: dataCityTwo.map(row => row.temp),
                }
            ]
        }
    }
    )
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const cityOneFromUser = data.get('inputCityOne');
    const cityTwoFromUser = data.get('inputCityTwo');

    const coordinateCityOne = await getCoordinatesByCityName(cityOneFromUser);
    const weatherCityOne = await getWeatherOfCity(coordinateCityOne);
    await createDOM(cityOneFromUser, weatherCityOne);

    const coordinateCityTwo = await getCoordinatesByCityName(cityTwoFromUser);
    const weatherCityTwo = await getWeatherOfCity(coordinateCityTwo);
    await createDOM(cityTwoFromUser, weatherCityTwo);

    await createChart(cityOneFromUser, cityTwoFromUser, weatherCityOne, weatherCityTwo);
})