const React = require('react');
const { render } = require('react-dom');
const { BrowserRouter, Match } = require('react-router');

const Landing = require('./Landing');
const Search = require('./Search');

const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Match exactly pattern="/" component={Landing} >
          </Match>
          <Match pattern="/search/:category/:searchValue" component={Search} />
        </div>
      </BrowserRouter>
    );
  }
});

render(<App />, document.getElementById('app'));
