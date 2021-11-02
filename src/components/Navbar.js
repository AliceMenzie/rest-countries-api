import React from "react";
import { Link } from "react-router-dom";
import { BsMoon } from 'react-icons/bs';


export default function Navbar() {
  return (
    <nav>
      <Link className="btn-home" to={`/`}>
        <h3>Where in the World?</h3>
      </Link>
      <div className="theme">
      < BsMoon/>
      <p>Dark Mode</p>
      </div>
    </nav>
  );
}
