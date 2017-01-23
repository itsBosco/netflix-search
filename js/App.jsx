const React = require('react');
const { render } = require('react-dom');
const { BrowserRouter, Match } = require('react-router');

const Landing = require('./Landing');
const SearchResults = require('./SearchResults');

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
