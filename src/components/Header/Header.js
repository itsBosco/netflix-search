import React from 'react';
import './header.css';

const Header = React.createClass({
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

export default Header;
