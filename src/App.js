import NavBar from './components/Navbar'
import Countries from './components/Countries'
import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Country from './components/Country'


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
    <Router>

      <NavBar />

    <Switch>
      <Route exact path='/'>
        <Countries countries={countries} />
      </Route>
      <Route exact path='/country/:id'>
        <Country countries={countries} />
      </Route>
    </Switch>

    </Router>
  );
}

export default App;
