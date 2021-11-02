 /* eslint-disable */
import React, { useState } from "react";
import Countries from "./Countries";
import { AiOutlineSearch } from 'react-icons/ai';


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
    <div className="main-container">
      <div className="hero-search">
        <div className="search-input-continer">
          < AiOutlineSearch />
      <input
        className="search-input"
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => setQuery(e.target.value)}
      />
      </div>
      <section>
        <div className="search-filter-wrapper">
        <select className="search-filter"
          onChange={(e) => {
            setFilterRegion(e.target.value);
          }}
          aria-label="Filter Countries By Region"
        >
          <option className="option" value="All">Filter By Region</option>
          <option className="option" value="Africa">Africa</option>
          <option className="option" value="Americas">America</option>
          <option className="option" value="Asia">Asia</option>
          <option className="option" value="Europe">Europe</option>
          <option className="option" value="Oceania">Oceania</option>
        </select>
        </div>
      </section>
      
      </div>
      <section className="countries-section">{searchCountries()}</section>
    </div>
  );
}

export default Search;
