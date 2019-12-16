import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Filter from './components/Filter';
import Country from './components/Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const endpoint = 'https://restcountries.eu/rest/v2/all'
    Axios.get(endpoint).then(response => {
      console.log(response)
      setCountries(response.data)
    })
  }, [])

  const countriesToShow = countries.filter(country =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  )

  const onChangeFilter = event => setFilter(event.target.value)

  return (
    <div>
      <Filter current={filter} onChange={onChangeFilter} />
      <Country countries={countriesToShow} />
    </div>
  );
}

export default App;
