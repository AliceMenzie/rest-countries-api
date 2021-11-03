import React from "react";
import { Link } from "react-router-dom";
import { BsMoon } from "react-icons/bs";

export default function Navbar( { setTheme, theme }) {

  const handleClick = (e) => {
    
    if (theme === 'light'){
    return setTheme('dark')}
    else if (theme === 'dark'){
      return setTheme('light')}
  }

  return (
    <nav>
      <Link className="btn-home" to={`/`}>
        <h3>Where in the World?</h3>
      </Link>
      {/* <ThemeButton /> */}
      <button onClick={() => handleClick()
        }>
        
      <BsMoon />
      Dark Mode
    </button>
    </nav>
  );
}
