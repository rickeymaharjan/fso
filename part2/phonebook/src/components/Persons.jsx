const DisplayPerson = ({person}) => {
  return <div>{person.name} {person.number}</div>
}


const Persons = ({persons}) => {
    return (
        <div>
            {persons.map(person => 
            <DisplayPerson key={person.id} person={person}/>)}
        </div>
    )
}

export default Persons