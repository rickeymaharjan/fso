import { useState } from 'react'

const DisplayPerson = ({person}) => {
  return <div>{person.name} {person.number}</div>
}

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas' , number: "1234567890"},
    { id: 2, name: 'Rickey Maharjan', number: "0987654321"}
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
      <form onSubmit={addNewPerson}>
        <div>
          name: <input onChange={handleInputName}/>
        </div>
        <div>
          number: <input onChange={handleInputNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => 
        <DisplayPerson key={person.id} person={person}/>)}
      </div>
    </div>
  )
}

export default App