const React = require('react');
const { Link } = require('react-router');

const Landing = React.createClass({
  render() {
    return (
      <div className="search-box">
          <input type="text" ref="searchValue" placeholder="House Of Cards" autoFocus/>
          <button onClick={() => this.props.handleSearch(this.refs.searchValue.value)}>
            <Link to="/search">Search</Link>
            </button>
      </div>
    );
  }
});

module.exports = Landing;
