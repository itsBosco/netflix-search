import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import MovieCard from '../MovieCard/MovieCard';

const ActorDetails = React.createClass({
  getInitialState () {
    return {
      netflixRouletteData: [],
    };
  },
  componentDidMount() {
    var params = this.props.match.params;
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

export default ActorDetails;
