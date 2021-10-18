import React from "react";
import { Link } from "react-router-dom";

export default function Countries({ filteredCountries }) {
  return (
    <div>
      {filteredCountries.map((country) => (
        
        <div key={country.alpha3Code}>
          <Link  to={`country/${country.name}`}>
            <img className="flag" alt='flag' src={country.flag}/>

            <h3> {country.name} </h3>
          </Link>
         
          <p> {country.region} </p>
          <p> {country.capital} </p>
          <p> {country.population.toLocaleString()} </p>
        </div>
      ))}
    </div>
  );
}
