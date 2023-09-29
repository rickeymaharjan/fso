import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    const nameExists = persons.some((person) => person.name == newName)

    if (nameExists) {
      alert(`${newName} already exists`)
    } else {
      console.log("New name")
      setPersons(persons.concat(personObject))
      setNewName("")
    }
  }

  const handleInputName = (event) => {
    setNewName(event.target.value)
  }

  const handleInputNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <PersonForm handleInputName={handleInputName} handleInputNumber={handleInputNumber} addNewPerson={addNewPerson}/>
      
      <h2>Numbers</h2>
      
      <Persons persons={persons}/>
    </div>
  )
}

export default App