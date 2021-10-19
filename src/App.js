import NavBar from "./components/Navbar";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/Search";
import Country from "./components/Country";

function App() {
  
  const [countries, setCountries] = useState([]);

  async function fetchCountries() {
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();
    // console.log(data)
    return setCountries(data);
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <Router>
      <NavBar />
      
      <Switch>
        <Route exact path="/">
          <Search countries={countries} />
          {/* <Countries countries={countries} /> */}
        </Route>

        <Route exact path="/country/:id">
          <Country countries={countries} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
