# Assignment-2

# Weather

This is a simple weather app built with Node.js and the OpenWeatherMap API.

## Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/your-repo.git
    cd your-repo
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    

3. **Set Up Environment Variables:**
   Create a `.env` file in the root of your project and add the following:
   ```env
   PORT=3000
   OPENWEATHER_API_KEY=your_openweathermap_api_key

# Run the App:
```bash
 npm start```

# Visit the App:
Open your web browser and go to http://localhost:3000.

# Usage
## Home Page:
The home page contains a simple form with an input field to enter the city name and a "Get Weather" button.

## Weather Page:
When you submit the form on the home page, it takes you to the weather page (/weather) which displays the temperature, weather description, and coordinates for the specified city.

## Map:
The weather page also includes a map showing the location of the specified city.

## API Usage:
The app uses the OpenWeatherMap API to fetch weather data for a given city. The API key is stored in the .env file.

## Frontend:
The frontend is built with HTML, CSS, and JavaScript. It uses Leaflet for displaying the map and Weather Icons for weather conditions.

## Folder Structure:
- **public:** Contains static files (stylesheets, client-side JavaScript).
- **views:** Contains EJS templates.
- **app.js:** The main server-side JavaScript file.
