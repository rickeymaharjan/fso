import { useState } from 'react'

const DisplayPerson = ({person}) => {
  return <div>{person.name}</div>
}

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas' },
    { id: 2, name: 'Rickey Maharjan'}
  ]) 
  const [newName, setNewName] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: persons.length + 1
    }

    setPersons(persons.concat(personObject))
    setNewName("")
  }

  const handleInput = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input onChange={handleInput}/>
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