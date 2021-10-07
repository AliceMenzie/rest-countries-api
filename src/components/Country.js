import React from "react";
import { useParams } from "react-router-dom";

export default function Country({ countries }) {
  const { id } = useParams();

  const attr = [];

  countries.map((country) => {
    if (country.name === id) {
      attr.push(country.name, country.capital, country.population);
    }

    return attr;
  });

  return (
    <div>
      <h1>{attr[0]}</h1>
      {attr.map((att) => (
        <div>{att}</div>
      ))}
    </div>
  );
}
