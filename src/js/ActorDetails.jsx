import React from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const ActorSearch = React.createClass({
  getInitialState () {
    return {
      netflixRouletteData: [],
    };
  },
  componentDidMount() {
    var params = this.props.params;
    axios.get(`http://netflixroulette.net/api/api.php?actor=${params.searchValue}`)
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
        {this.state.netflixRouletteData.map((show) => {
          return (
            <MovieCard key={show.show_id} show={show} />
          );
        })}
      </div>

    );
  }
});

module.exports = ActorSearch;
