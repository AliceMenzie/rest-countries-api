import React from "react";
import { Link } from "react-router-dom";

export default function Countries({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <Link to={`country/${country.name}`}>
          <div key={country.name}>{country.name}</div>
        </Link>
      ))}
    </div>
  );
}
