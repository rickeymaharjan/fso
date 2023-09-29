import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => setPersons(response.data))

  }, [])

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