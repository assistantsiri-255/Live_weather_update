function getWeather() {
    const city = document.getElementById("city").value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=82b39d5e5161b42d81f8e662f206208c&units=metric`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("city-name").textContent = city;
                document.getElementById("temperature").textContent = data.main.temp; 
                document.getElementById("wind").textContent = data.main.feels_like;
                document.getElementById("rain").textContent = data.wind.speed;
                document.getElementById("weather").textContent = data.weather[0].description;
                document.getElementById("weather-info").style.display = "block";
            })
            .catch(error => {
                alert("City not found. Please try again.");
            });
    } else {
        alert("Please enter a city name.");
    }
}


// a[1,2,3,4];
// a[{1,2,3},{1,4,5}] a[0] = {1,2,3}