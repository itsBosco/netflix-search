const React = require('react');
const { render } = require('react-dom');
const { BrowserRouter, Match } = require('react-router');

const Landing = require('./Landing');
const Search = require('./Search');

const App = React.createClass({
  getInitialState () {
    return {
      searchValue: ''
    };
  },
  handleSearch (searchValue) {
    this.setState({searchValue: searchValue});
  },
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Match exactly pattern="/" component={(props) => <Landing
              handleSearch={this.handleSearch}  {...props}/>} >
          </Match>
          <Match pattern="/search" component={(props) => <Search searchType="title"
              searchValue={this.state.searchValue} {...props}/>} />
        </div>
      </BrowserRouter>
    );
  }
});

render(<App />, document.getElementById('app'));
