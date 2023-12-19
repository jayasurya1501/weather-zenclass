async function checkWeather(country) {
    try {
        const apiKey = 'd71eef0f71b244ada2b22520e2c4dd72';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`);
        const data = await response.json();

        if (response.ok) {
            const temperature = (data.main.temp - 273.15).toFixed(2);
            const description = data.weather[0].description;

           
            openPopup(`Weather in ${country}<br>Temperature: ${temperature}°C<br>Description: ${description}`);
        } else {
            alert(`Error fetching weather data for ${country}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function openPopup(content) {
    document.getElementById('popup-content').innerHTML = content;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}