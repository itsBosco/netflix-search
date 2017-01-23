const React = require('react');
const { Link } = require('react-router');

const Landing = React.createClass({
  getInitialState () {
    return {
      searchValue: '',
      category: 'title',
      inputPlaceholder: 'The Blacklist'
    };
  },

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
  
  render() {
    return (
      <div className="search-box">
          <input
            onChange={this.handleInput} type="text"
            placeholder={this.state.inputPlaceholder}
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
