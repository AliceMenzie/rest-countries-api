import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to={`/`}>
        <h3>Where in the World?</h3>
      </Link>
    </nav>
  );
}
