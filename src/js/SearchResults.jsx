import React from 'react';
import axios from 'axios';

import TitleDetails from './TitleDetails';
import DirectorDetails from './DirectorDetails';
import ActorDetails from './ActorDetails';

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
        <TitleDetails netflixRouletteData={this.state.netflixRouletteData}/>
      );
    case 'director':
      return (
        <DirectorDetails netflixRouletteData={this.state.netflixRouletteData} />
      );
    case 'actor':
      return (
        <ActorDetails netflixRouletteData={this.state.netflixRouletteData} />
      );
    default:
      return (
        <h1>404</h1>
      );
    }
  }
});

module.exports = SearchResults;
