import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Content from './components/Content'
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all"


const App = () => {
  const [countries, setCountries] = useState([])
  const [all, setAll] = useState([])
  const [newFilter, setNewFilter] = useState([])


  // Store all the country's data in a state
  useEffect(() => {
    console.log("effect run")
    console.log("fetching data...")
    const request = axios.get(`${baseUrl}`)
    request.then(response => {
      setAll(response.data)
    })
  }, [])

  const handleFilter = (event) => {
    const searchTerm = event.target.value;
    setNewFilter(searchTerm);
  
    if (searchTerm) {
      const regex = new RegExp(searchTerm, 'i');
      const filteredCountries = all.filter((country) => regex.test(country.name.common));
      setCountries(filteredCountries);
    } else {
      setCountries([]);
    }
  };

  return (
    <>
      <Filter onChange={handleFilter}/>
      <Content countries={countries}/> 
      {/* use filter to maybe change the (search for countries) to (no results found for {country.name}) */}
    </>
  )
}

export default App
