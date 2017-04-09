import React from 'react';
import './header.css';

const Header = React.createClass({
  render() {
    return (
      <header className="navbar">
          <a href="#"><img src="logo.png" alt="Netflix Search"/></a>
      </header>
    );
  }
});

export default Header;
