import './index.css'
import React, { useState, useEffect } from 'react'
import Numbers from './components/Numbers'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import personService from './services/persons'

const Title = ({ text }) => <h2>{text}</h2>
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  const showNotification = (text, className) => {
    setMessage({ text, className })
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const addPerson = event => {
    event.preventDefault()
    const personsExist = persons.filter(person => person.name === newName)
    if (personsExist.length > 0) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)) {
        personService
          .update(personsExist[0].id, { ...personsExist[0], number: newNumber })
          .then(person => {
            showNotification(`${person.name}'s info has been updated!`, 'success')
            setPersons(persons.map(item =>
              item.id === person.id ? person : item
            ))
          })
          .catch(error => {
            showNotification(`${personsExist[0].name} has already been deleted from the server.`, 'error')
            setPersons(persons.filter(item => item.id !== personsExist[0].id))
          })
      }
    } else {
      const personObj = {
        name: newName,
        number: newNumber,
      }
      personService
        .create(personObj)
        .then(newPerson => {
          showNotification(`${newPerson.name} added to the phonebook!`, 'success')
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          console.log(error.response)
          showNotification(`${error.response.data.error}`, 'error')
        })
    }
  }

  const onChangeFilter = event => setNewFilter(event.target.value)
  const onChangeName = event => setNewName(event.target.value)
  const onChangeNumber = event => setNewNumber(event.target.value)
  const onDelete = person => {
    if (window.confirm(`Would you like to delete ${person.name} from the phonebook?`)) {
      personService
        .deletePerson(person.id)
        .then(() => {
          showNotification(`${person.name} deleted from the phonebook!`, 'success')
          setPersons(persons.filter(item => item.id !== person.id))
        })
        .catch(error => {
          showNotification(`${person.name} has already been deleted from the server.`, 'error')
          setPersons(persons.filter(item => item.id !== person.id))
        })
    }
  }

  return (
    <div>
      <Title text='Phonebook' />
      <Notification message={message} />
      <Filter filter={filter} onChange={onChangeFilter} />
      <Title text='Add New' />
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        onChangeName={onChangeName}
        newNumber={newNumber}
        onChangeNumber={onChangeNumber} />
      <Title text='Numbers' />
      <Numbers persons={personsToShow} onDelete={onDelete} />
    </div>
  )
}

export default App
