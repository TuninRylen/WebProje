const url = 'https://api.openweathermap.org/data/2.5/';
const key ='3d91e2c74888339ee502893c7ef6fa68';

const serQuery = (e) => {
    if(e.keyCode == '13')
    getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    console.log(query);
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`
    
    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerText = `Durum: ${result.weather[0].description}`

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `Min: ${Math.round(result.main.temp_min)}°C / Max: ${Math.round(result.main.temp_max)}°C`
}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress',serQuery)