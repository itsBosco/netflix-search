import React from 'React';
import '../scss/Header.scss';

const Header = React.createClass({
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

module.exports = Header;
