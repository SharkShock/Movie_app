import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'



function Nav() {



  return (
    <nav>

      <h2 className="logo">  MOVIES</h2>
      <ul className="nav-links">
        <Link to="Movie_list">
          <li className="btn">Movie List</li>
        </Link>
        <Link to="/Movie_gallery">
          <li className="btn">Movie Gallery</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

