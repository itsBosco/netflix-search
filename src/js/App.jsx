import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import '../scss/style.scss';

import Landing from './Landing';
import SearchResults from './SearchResults';

const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Match exactly pattern="/" component={Landing} >
          </Match>
          <Match pattern="/search/:category/:searchValue" component={SearchResults} />
        </div>
      </BrowserRouter>
    );
  }
});

render(<App />, document.getElementById('app'));
