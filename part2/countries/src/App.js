import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Filter from './components/Filter';
import Country from './components/Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [countryToShow, setCountryToShow] = useState(null)

  useEffect(() => {
    const endpoint = 'https://restcountries.eu/rest/v2/all'
    Axios.get(endpoint).then(response => {
      setCountries(response.data)
    })
  }, [])

  let countriesToShow = countries.filter(country => {
    if (filter === '') {
      return false
    }
    return country.name.toLowerCase().includes(filter.toLowerCase())
  })
  if (countryToShow !== null) {
    countriesToShow = countryToShow
  }
  // console.log(countryToShow, countriesToShow)

  const onChangeFilter = event => setFilter(event.target.value)
  const onChangeCountryEvent = event => {
    const countryCode = event.target.dataset.country
    // console.log(countryCode, event.target.dataset, event.target)
    if (countryCode === null || countryCode === undefined) {
      setCountryToShow(null)
    } else {
      const country = countries.filter(country => {
        return country.alpha3Code === countryCode
      })
      setCountryToShow(country)
    }
  }

  return (
    <div>
      <Filter current={filter} onChange={onChangeFilter} />
      <Country countries={countriesToShow} onChangeCountry={onChangeCountryEvent} />
    </div>
  );
}

export default App;
