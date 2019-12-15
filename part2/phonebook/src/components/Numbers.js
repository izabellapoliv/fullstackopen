import React from 'react'

const Person = ({ name, number }) => <li>{name} | {number}</li>

const Numbers = ({ persons }) => {
  const personsList = persons.map(person =>
    <Person key={person.id} name={person.name} number={person.number} />
  )
  return (
    <ul>{personsList}</ul>
  )
}

export default Numbers
