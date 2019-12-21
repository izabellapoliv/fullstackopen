import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Weather from './Weather';

const Message = ({ text }) => <p>{text}</p>
const Button = ({ countryCode, onClick, text }) => <button onClick={onClick} data-country={countryCode}>{text}</button>
const List = ({ countries, onChangeCountry }) => {
    const items = countries.map(country =>
        <li key={country.alpha3Code}>
            {country.name}
            &nbsp;<Button countryCode={country.alpha3Code} onClick={onChangeCountry} text="show" />
        </li>
    )
    return (
        <ul>{items}</ul>
    )
}
const Languages = ({ languages }) => {
    const items = languages.map(language =>
        <li key={language.iso639_2}>
            {language.name}
        </li>
    )
    return (
        <ul>{items}</ul>
    )
}
const Details = ({ country, onChangeCountry }) => {
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        const weatherApiKey = 'c234503568b2c7324db959a61e4f5ee4'
        const endpoint = 'http://api.weatherstack.com/current'
            + '?access_key=' + weatherApiKey
            + '&query=' + country.capital
            + '&units=m'

        Axios.get(endpoint).then(response => {
            setWeather(response.data)
        })
    }, [country.capital])
    // console.log(weather)

    return (
        <div>
            <h2>{country.name}</h2>
            <p><b>Capital: </b> {country.capital}</p>
            <p><b>Population: </b> {country.population}</p>
            <h3>Languages</h3>
            <Languages languages={country.languages} />
            <img src={country.flag} alt={country.name} width="200" />
            <br />
            <Weather city={country.capital} weatherData={weather} />
            <Button countryCode={null} onClick={onChangeCountry} text="back" />
        </div>
    )
}

const Country = ({ countries, onChangeCountry }) => {
    if (countries.length > 10) {
        return <Message text="Too many results, plase be more specific!" />
    } else if (countries.length > 1) {
        return <List countries={countries} onChangeCountry={onChangeCountry} />
    } else if (countries.length === 1) {
        return <Details country={countries[0]} onChangeCountry={onChangeCountry} />
    } else {
        return <Message text="" />
    }
}

export default Country
