import NavBar from './components/Navbar'
import Countries from './components/Countries'
import React, {useState, useEffect} from 'react'

function App() {
  const [countries, setCountries] = useState([])

  async function fetchCountries() {
    const response = await fetch('https://restcountries.com/v2/all')
    const data = await response.json()

    setCountries(data)
  }

  useEffect(() => {
    fetchCountries()
  }, [])


  return (
    <div>
    <NavBar />
    <Countries countries={countries} />
    </div>
  );
}

export default App;
