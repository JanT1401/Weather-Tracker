const cityInput = document.getElementById('cityInput');
const submitButton = document.getElementById('submitButton');
const weatherCard = document.getElementById('weatherCard');
const city = document.getElementById('city');
const container = document.querySelector('.container');
const degrees = document.getElementById('degrees');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('windspeed');
const weatherInformation = [degrees, humidity, windspeed];

function searchCity(){
    let userInput = document.getElementById('cityInput').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=d3767b5f57160d6678e34b6e6197a2c8`)
    	.then(res => res.json())
        .then(data => {
            if(data.message === 'city not found'){
                alert("Invalid city!");
            }
            else {
                console.log(data);
                degrees.textContent = 'Degrees: ' + Math.round(data.main.temp - 273.15) + '°C';
                humidity.textContent = 'Humidity: ' + data.main.humidity + '%';
                windspeed.textContent = 'Windspeed: ' + data.wind.speed + 'm/s';
            }
        })
        .catch(err => alert(err));
}

addEventListener('keypress', key => {
    if(key.keyCode === 13){
        searchCity();
    }
})