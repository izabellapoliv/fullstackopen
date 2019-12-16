import React from 'react';

const Message = ({ text }) => <p>{text}</p>
const List = ({ countries }) => {
    const items = countries.map(country =>
        <li key={country.alpha3Code}>
            {country.name}
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
const Details = ({ country }) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <p><b>Capital: </b> {country.capital}</p>
            <p><b>Population: </b> {country.population}</p>
            <h3>Languages</h3>
            <Languages languages={country.languages} />
            <img src={country.flag} alt={country.name} width="200" />
        </div>
    )
}

const Country = ({ countries }) => {
    if (countries.length > 10) {
        return <Message text="Too many results, plase be more specific!" />
    } else if (countries.length > 1) {
        return <List countries={countries} />
    } else if (countries.length === 1) {
        return <Details country={countries[0]} />
    } else {
        return <Message text="" />
    }
}

export default Country
