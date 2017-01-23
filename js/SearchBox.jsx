const React = require('react');
const { Link } = require('react-router');

const SearchBox = React.createClass({
  getInitialState () {
    return {
      searchValue: '',
      category: 'title',
      inputPlaceholder: 'The Blacklist'
    };
  },
  /* COSTOM METHODS */
  handleInput (event) {
    this.setState({searchValue: event.target.value});
  },

  handleSelect (event) {
    var value = event.target.value;

    this.setState({category: value});

    //Change place holder based on category
    switch (value) {
    case 'title':
      this.setState({inputPlaceholder: 'The Blacklist'});
      break;
    case 'director':
      this.setState({inputPlaceholder: 'Quentin Tarantino'});
      break;
    case 'actor':
      this.setState({inputPlaceholder: 'Nicolas Cage'});
      break;
    }
  },
  /* ///////////// */

  render() {
    return (
      <div className="search-box">
        <form action="">
          <input
            onChange={this.handleInput} type="text"
            placeholder={this.state.inputPlaceholder}
            autoFocus/>
          <select name="" id="" onChange={this.handleSelect}>
            <option value="title">Title</option>
            <option value="director">Director</option>
            <option value="actor">Actor</option>
          </select>
          <Link  to={`/search/${this.state.category}/${this.state.searchValue}`}>
            <input className="button" type="submit" value="Search"/>
          </Link>
        </form>
      </div>
    );
  }
});

module.exports = SearchBox;
