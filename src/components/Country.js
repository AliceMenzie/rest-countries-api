import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { IoIosArrowRoundBack } from 'react-icons/io';

export default function Country({ countries }) {
  const { id } = useParams();
  const history = useHistory();

  const goBack = () => {
    history.goBack()
  }

  let selectedCountry = countries.filter(country => {

    return country.name === id
 })
 
 console.log(selectedCountry)

 
  return (
    <div className="selected-country-container">
     
      <button className="btn btn-back"type="button" onClick={goBack}>
     < IoIosArrowRoundBack /> Back
  </button>
      
      {selectedCountry.map((item) => (
      <div className="country-container">

        <div className="country-1">
          <img className="flag" alt='flag' src={item.flag}/>  
        </div>

        <div className="country-2">
          <h3>{item.name}</h3>
          <p> <strong> Native Name:</strong> {item.nativeName}</p>
          <p> <strong>Population:</strong> {item.population}</p>
          <p> <strong>Region:</strong> {item.region}</p>
          <p> <strong>Sub Region:</strong> {item.subregion}</p>
          <p> <strong>Capital:</strong> {item.capital}</p>
        </div>

        <div className="country-3">
         <p><strong>Top Level Domain:</strong> {item.topLevelDomain}</p>
         <p><strong>Currencies:</strong> {item.currencies.map(curr => (<span>{curr.name}</span>))}</p>
         <p><strong>Languages:</strong> {item.languages.map(lang => (<span>{lang.name} </span>))}</p>
        </div>

        <div className="country-4">
        <strong>Border Countries: </strong> {item.borders.map(border => (<span className="border-country">{border} </span>))}
        </div>

      </div>
      
      
      ))}
      
    </div>
  );
}
