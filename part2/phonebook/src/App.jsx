import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Person from './components/Persons'
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
      const confirm = window.confirm(`${newName} is already added to the phonebook, replace the old number with the new one?`)
      if (confirm) {
        const matchingPerson = persons.find(person => person.name == newName)
        const updatedObj = {...matchingPerson, number: newNumber}
        personServices.updateNumber(updatedObj.id, updatedObj)
          .then(returnedPerson => 
            setPersons(persons.map(p => p.id === matchingPerson.id ? returnedPerson : p))
          )
          .catch(error => 
            alert(`${matchingPerson.name} deleted from the server`)
            ,setPersons(persons.filter(p => p.id != matchingPerson.id))
            )
      } else {
        console.log("No changes made.")
      }
      } else {
        // Add new contacts in the server
        personServices.addPerson(personObject)
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

  const handleDelete = (id) => {
    const match = persons.find(person => id === person.id)
    const confirm = window.confirm(`Delete ${match.name}?`)
    if (confirm) {
      personServices.deletePerson(match.id)
      console.log(`'${match.name}' removed from the list.`)
      const updatedList = persons.filter(person => person.id != match.id)
      setPersons(updatedList)
    } else {
      console.log("No changes made.")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <PersonForm handleInputName={handleInputName} handleInputNumber={handleInputNumber} addNewPerson={addNewPerson}/>
      
      <h2>Numbers</h2>

      {persons.map(person => (
          <Person 
            key={person.id} 
            person={person} 
            handleClick={() => handleDelete(person.id)}
          />
      ))}
    </div>
  )
}

export default App