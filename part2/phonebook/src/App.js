import React, { useState } from 'react'
import Numbers from './components/Numbers'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const Title = ({ text }) => <h2>{text}</h2>
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')

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
