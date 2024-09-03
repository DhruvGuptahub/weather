import React, { useState } from 'react'
import { useEffect } from 'react'

const API_KEY = '540fb468fd9ec3db00d4fb6c5ad4ef08'

function Weather() {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState(null)
    const [query, setQuery] = useState('')

    const handleInputChange = (e) => {
        setCity(e.target.value)
    }


    const fetchWeather = async () => {
        if (query.trim() === '') {
            alert('Please enter a city name.')
            return
        }


        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`)

            if (!response.ok) {
                throw new Error('City Not Found')
            }

            const data = await response.json()
            setWeather(data)
        }

        catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        if (query) {
            fetchWeather()
        }
    }, [query])


    const handleSearch = () => {
        setQuery(city)
        setCity('')
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <div>
            <h1>Check Weather Status</h1>
            <input
                type="text"
                value={city}
                onChange={handleInputChange}
                placeholder='Enter city name'
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleSearch}>Get Weather</button>

            {weather && (
                <div>
                    <h2>Weather in {weather.name}</h2>
                    <p>Temperature: {weather.main.temp}</p>
                    <p>Humidity: {weather.main.humidity} %</p>
                    <p>Condition: {weather.weather[0].description}</p>
                </div>)}
        </div>
    )
}

export default Weather
