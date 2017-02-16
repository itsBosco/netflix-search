import React from 'react';

import SearchBox from './SearchBox';
import Header from './Header';

const Landing = React.createClass({
  render () {
    return (
      <div>
        <Header />
        <SearchBox />
      </div>

    );
  }
});

module.exports = Landing;
