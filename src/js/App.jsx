import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import '../scss/style.scss';

import Landing from './Landing';
import TitleDetails from './TitleDetails';
import ActorDetails from './ActorDetails';
import DirectorDetails from './DirectorDetails';

const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Match exactly pattern="/" component={Landing} >
          </Match>
          <Match pattern="/title/:searchValue" component={TitleDetails} />
          <Match pattern="/actor/:searchValue" component={ActorDetails} />
          <Match pattern="/director/:searchValue" component={DirectorDetails} />
        </div>
      </BrowserRouter>
    );
  }
});

render(<App />, document.getElementById('app'));
