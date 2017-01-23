const React = require('react');
const axios = require('axios');

const TitleSearch = require('./TitleSearch');
const DirectorSearch = require('./DirectorSearch');
const ActorSearch = require('./ActorSearch');

const SearchResults = React.createClass({
  getInitialState () {
    return {
      netflixRouletteData: {}
    };
  },

  componentDidMount() {
    var params = this.props.params;
    axios.get(`http://netflixroulette.net/api/api.php?${params.category}=${params.searchValue}`)
      .then((response) => {
        this.setState({netflixRouletteData: response.data});
      })
      .catch((error) => {
        console.log('netflix roulette error', error);
      });
  },

  render() {
    switch (this.props.params.category) {
    case 'title':
      return (
        <TitleSearch netflixRouletteData={this.state.netflixRouletteData}/>
      );
    case 'director':
      return (
        <DirectorSearch netflixRouletteData={this.state.netflixRouletteData} />
      );
    case 'actor':
      return (
        <ActorSearch netflixRouletteData={this.state.netflixRouletteData} />
      );
    default:
      return (
        <h1>404</h1>
      );
    }
  }
});

module.exports = SearchResults;
