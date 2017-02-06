import React from 'react';
import { Link } from 'react-router';
import '../scss/searchbox.scss';

const SearchBox = React.createClass({
  getInitialState () {
    return {
      searchValue: '',
      category: 'title',
      inputPlaceholder: 'The Walking Dead'
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
      this.setState({inputPlaceholder: 'The Walking Dead'});
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
          <input type="text" name="searchInput"
            onChange={this.handleInput}
            placeholder={this.state.inputPlaceholder}
            autoFocus/>
          <select name="" id="" onChange={this.handleSelect}>
            <option value="title">Title</option>
            <option value="director">Director</option>
            <option value="actor">Actor</option>
          </select>
          <Link  to={`/${this.state.category}/${this.state.searchValue}`}>
            <input className="button" type="submit" value="Search"/>
          </Link>
        </form>
      </div>
    );
  }
});

module.exports = SearchBox;
