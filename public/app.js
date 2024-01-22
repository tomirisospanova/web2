const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use('/leaflet', express.static(path.join(__dirname, 'node_modules/leaflet/dist')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/weather', async (req, res) => {
    try {
        const city = req.query.city;
        const weatherData = await getWeatherData(city);
        res.render('weather', { weatherData });
    } catch (error) {
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
        coords: response.data.coord,
    };
    return weatherData;
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
