import React from 'react';
import '../scss/navbar.scss';

const Navbar = React.createClass({
  render() {
    return (
      <nav className="navbar">
        <ul>
          <li>
            <a href="/"><img src="/public/logo.png" alt="Netflix Search"/></a>
          </li>
        </ul>
      </nav>
    );
  }
});

export default Navbar;
