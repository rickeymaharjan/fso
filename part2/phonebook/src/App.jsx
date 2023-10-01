import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personServices from "./services/phonebook"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personServices
      .getAll()
      .then(initialContacts => setPersons(initialContacts))
  }, [])

  const addNewPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    const nameExists = persons.some((person) => person.name == newName)

    if (nameExists) {
      alert(`${newName} already exists`)
    } else {
      console.log("New name")
      // Add new contacts in the server
      personServices.addPerson(personObject).then(response => console.log(response))
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