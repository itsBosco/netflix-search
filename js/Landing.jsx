const React = require('react');
const { Link } = require('react-router');

const Landing = React.createClass({
  getInitialState () {
    return {
      searchValue: ''
    };
  },
  handleInput (event) {
    this.setState({searchValue: event.target.value});
  },
  render() {
    return (
      <div className="search-box">
          <input onChange={this.handleInput} type="text" placeholder="House Of Cards" autoFocus/>
          <Link className="button" to={`/search/title/${this.state.searchValue}`}>Search</Link>
      </div>
    );
  }
});

module.exports = Landing;
