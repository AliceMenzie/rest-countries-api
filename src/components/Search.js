 /* eslint-disable */
import React, { useState } from "react";
import Countries from "./Countries";

function Search({ countries }) {
  const [query, setQuery] = useState("");
  const [filterRegion, setFilterRegion] = useState('All');

  const filteredCountries = countries.filter((country) => {

    if (country.region === filterRegion) {
        return country.name.toLowerCase().includes(query.toLowerCase())

    } else if (filterRegion === "All") {
    return country.name.toLowerCase().includes(query.toLowerCase())
    } 
    
  });

  function searchCountries() {
    return <Countries filteredCountries={filteredCountries} />;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setQuery(e.target.value)}
      />

      <section>
        <select
          onChange={(e) => {
            setFilterRegion(e.target.value);
          }}
          aria-label="Filter Countries By Region"
        >
          <option value="All">Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </section>
      <section>{searchCountries()}</section>
    </div>
  );
}

export default Search;
