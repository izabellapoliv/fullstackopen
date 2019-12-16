import React, { useState, useEffect } from 'react'
import Numbers from './components/Numbers'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Axios from 'axios'

const Title = ({ text }) => <h2>{text}</h2>
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')

  useEffect(() => {
    Axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      })
  }, [])

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  const addPerson = event => {
    event.preventDefault()
    const personsExist = persons.filter(person => person.name === newName)
    if (personsExist.length > 0) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObj = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(personObj))
      setNewName('')
      setNewNumber('')
    }
  }

  const onChangeFilter = event => setNewFilter(event.target.value)
  const onChangeName = event => setNewName(event.target.value)
  const onChangeNumber = event => setNewNumber(event.target.value)

  return (
    <div>
      <Title text='Phonebook' />
      <Filter filter={filter} onChange={onChangeFilter} />
      <Title text='Add New' />
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        onChangeName={onChangeName}
        newNumber={newNumber}
        onChangeNumber={onChangeNumber} />
      <Title text='Numbers' />
      <Numbers persons={personsToShow} />
    </div>
  )
}

export default App
