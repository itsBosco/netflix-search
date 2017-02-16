import React from 'react';
import axios from 'axios';
import Header from './Header';
import MovieCard from './MovieCard';

const DirectorSearch = React.createClass({
  getInitialState () {
    return {
      netflixRouletteData: []
    };
  },
  componentDidMount() {
    var params = this.props.params;
    axios.get(`http://netflixroulette.net/api/api.php?director=${params.searchValue}`)
      .then((response) => {
        this.setState({netflixRouletteData: response.data});
      })
      .catch((error) => {
        console.log('netflix roulette error', error);
      });
  },
  render() {
    return (
      <div className="container">
        <Header />
        {this.state.netflixRouletteData.map((show) => {
          return (
            <MovieCard key={show.show_id} show={show} />
          );
        })}
      </div>

    );
  }
});

module.exports = DirectorSearch;
