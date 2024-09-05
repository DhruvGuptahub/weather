
# Simple Weather App in React
## Features of the Weather App:
- Allows users to input a city name.
- Fetches weather data from a public API based on the city.
- Displays the weather information, such as temperature, weather description, humidity, etc.

# How the Weather App Works
## User Input:

- The user enters a city name in the input field.
- The handleInputChange function updates the city state with the input value.
- Fetching Weather Data:

## When the user clicks the "Get Weather" button, the fetchWeather function is triggered.
- It checks if the city input is not empty.
- It then makes an API call to OpenWeatherMap using fetch() in **useEffect** with the city name and API key.
- If the city is found, the response is converted to JSON, and the weather state is updated with the fetched data.
- If there is an error (e.g., city not found), it catches the error and displays an alert.

## Displaying Weather Data:

### If the weather state is not null, the app displays the weather information:
- City name
- Temperature
- Humidity
- Weather condition (e.g., clear, cloudy, etc.)

## Key Concepts and Features Practiced
- State Management: Using useState to manage the city input and weather data states.
- UseEffect Hook: Using useEffect to manage the api call and renders only when the dependency array state changes. 
- API Calls: Using the fetch API to make HTTP requests and handle responses.
- Conditional Rendering: Rendering different UI components based on the state (weather data availability).
- Error Handling: Handling potential errors gracefully (e.g., invalid city name).
