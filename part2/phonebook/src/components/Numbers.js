import React from 'react'

const Person = ({ person, onDelete }) => <li>
  {person.name} | {person.number}
  &nbsp;<button onClick={() => onDelete(person)}>delete</button>
</li>

const Numbers = ({ persons, onDelete }) => {
  const personsList = persons.map(person =>
    <Person key={person.id} person={person} onDelete={onDelete} />
  )
  return (
    <ul>{personsList}</ul>
  )
}

export default Numbers
