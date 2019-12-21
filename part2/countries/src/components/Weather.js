import React from 'react';

const Icon = ({ icon }) => <img src={icon} alt="Icon" />
const Description = ({ text }) => <li>{text}</li>

const Weather = ({ city, weatherData }) => {
    if (weatherData === null || weatherData === undefined) {
        return (<></>)
    }
    const weather = weatherData.current
    // console.log(weather)
    const icons = weather.weather_icons.map((img, key) =>
        <Icon icon={img} key={key} />
    )
    const descriptions = weather.weather_descriptions.map((text, key) =>
        <Description text={text} key={key} />
    )
    return (
        <>
            <h3>Weather in {city}</h3>
            <div>{icons}</div>
            <ul>{descriptions}</ul>
            <p><b>Temperature:</b> {weather.temperature} ºC</p>
            <p><b>Wind:</b> {weather.wind_speed} km/h</p>
        </>
    )
}

export default Weather
