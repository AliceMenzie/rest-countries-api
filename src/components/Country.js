import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link } from "react-router-dom";

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


 
  let container = []
  selectedCountry.map(border => (border.borders === undefined ? 
    null : border.borders.map( x => container.push(x))
    
    ))

    console.log(`this is the container -------------`)
    console.log(container)

    let selectedBorderCountries = countries.filter(country => {
    
        for (let i of container) {

         if(country.alpha3Code === i){
           return country
         }
          
        }  
   })
    
    

    
        
 console.log(selectedBorderCountries)


//  console.log(getBorderingCountries(selectedCountry))

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

              
          {/* // to={`country/${country.name}`} */}

          <div className="country-4">
        <div>
            {item.borders === undefined ? (
               null
            ): (
               <div>
                 <p><strong>Borders:</strong> {selectedBorderCountries.map(border => (<Link to={`${border.name}`} >{border.name} </Link>))}</p>
               {/* border is the alpha3Code so need to filter country by this then get mane and link name  */}
               </div>
            )}
        </div>
    </div>  
    
      </div>
      
      
      ))}
      
    </div>
  );
}
