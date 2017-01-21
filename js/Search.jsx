const React = require('react');
const axios = require('axios');

const Search = React.createClass({
  getInitialState () {
    return {
      netflixRouletteData: {}
    };
  },
  componentDidMount() {
    axios.get(`http://netflixroulette.net/api/api.php?${this.props.searchType}=${this.props.searchValue}`)
      .then((response) => {
        this.setState({netflixRouletteData: response.data});
      })
      .catch((error) => {
        console.log("netflix roulette error", error);
      });
  },
  render() {
    return (
      <h1>{this.props.searchValue}</h1>
    );
  }
});

module.exports = Search;
