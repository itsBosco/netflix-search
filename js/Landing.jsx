const React = require('react');
const { Link } = require('react-router');

const Landing = React.createClass({
  getInitialState () {
    return {
      searchValue: '',
      category: 'title'
    };
  },
  handleInput (event) {
    this.setState({searchValue: event.target.value});
  },
  handleSelect (event) {
    this.setState({category: event.target.value});
  },
  render() {
    return (
      <div className="search-box">
          <input
            onChange={this.handleInput} type="text"
            placeholder="The Blacklist"
            autoFocus/>
          <select name="" id="" onChange={this.handleSelect}>
            <option value="title">Title</option>
            <option value="director">Director</option>
            <option value="actor">Actor</option>
          </select>
          <Link className="button" to={`/search/${this.state.category}/${this.state.searchValue}`}>
            Search
          </Link>
      </div>
    );
  }
});

module.exports = Landing;
