import React from "react";
import { Link } from "react-router-dom";

export default function Countries({ filteredCountries }) {
  return (
    <div className="countries-container" >
      
      {filteredCountries.map((country) => (
        

        <div key={country.alpha3Code} className="country">
          <div className="img-wrapper">
          <Link  to={`country/${country.name}`}>
            <img className="flag" alt='flag' src={country.flag}/>  
          </Link>
          </div>
          <div className="country-contents">
          <h3> {country.name} </h3>
          <p><strong>Population: </strong> {country.population.toLocaleString()} </p>
          <p><strong>Region: </strong> {country.region}  </p>
          <p><strong>Capital: </strong> {country.capital}  </p>
          </div>
         </div>
        
      ))}
      
      
    </div>
  );
}
