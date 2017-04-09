import React, { Component } from 'react';

import SearchBox from '../SearchBox/SearchBox';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
      <div className="background"></div>
        <SearchBox />
      </div>
    );
  }
}

export default Landing;
