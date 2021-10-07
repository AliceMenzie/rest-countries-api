import React from 'react'

export default function Countries({ countries }) {
    return (
        <div>
            {countries.map(country => 
                <div>
                    {country.name}
                </div>
                
              )}
            
        </div>
    )
}
