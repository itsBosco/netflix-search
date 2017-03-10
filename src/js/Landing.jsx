import React from 'react';

import SearchBox from './SearchBox';
import Navbar from './Navbar';

const Landing = React.createClass({
  render () {
    return (
      <div>
        <Navbar />
        <SearchBox />
      </div>

    );
  }
});

export default Landing;
