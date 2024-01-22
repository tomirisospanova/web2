const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/weather', async (req, res) => {
    try {
        const city = req.query.city;
        const weatherData = await getWeatherData(city);
        res.json(weatherData);
    } catch (error) {a
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

async function getWeatherData(city) {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await axios.get(apiUrl);
    const weatherData = {
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
    };
    return weatherData;
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
