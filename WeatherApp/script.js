const search = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const temp = document.querySelector('.temp');
const feelsLike = document.querySelector('.feels-like');
const cityName = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const visibility = document.querySelector('.visibility');

const apiKey = 'b4f93509218e51a8e0c3cc7157a0edee';


async function fetchWeatherInfo(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error("Can't find the City");
        }
        const data = await res.json();

        temp.textContent = `${data.main.temp}°c`;
        feelsLike.textContent = `Feels Like - ${data.main.feels_like}°c`;
        cityName.textContent = data.name;
        humidity.textContent = `${data.main.humidity}%`;
        wind.textContent = `${data.wind.speed} km/hr`;
        visibility.textContent = `${data.visibility} miles`;
    } catch (error) {
        alert(error.message);
    }
}


searchButton.addEventListener('click', () => {
    const cityInput = search.value;
    if (cityInput) {
        fetchWeatherInfo(cityInput);
    } else {
        alert("Please enter the name of the city");
    }
});

search.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const cityInput = search.value;
        if (cityInput) {
            fetchWeatherInfo(cityInput);
        } else {
            alert("Please enter the name of the city");
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const defaultCity = "Sangli"; 
    fetchWeatherInfo(defaultCity);
});
