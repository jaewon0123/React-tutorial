import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/Main">Main</Link></li>
        
      </ul>
    </nav>
  );
};

export default NavBar;
