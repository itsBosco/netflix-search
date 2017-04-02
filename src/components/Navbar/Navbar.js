import React from 'react';
import './navbar.css';

const Navbar = React.createClass({
  render() {
    return (
      <nav className="navbar">
        <ul>
          <li>
            <a href="#"><img src="logo.png" alt="Netflix Search"/></a>
          </li>
        </ul>
      </nav>
    );
  }
});

export default Navbar;
