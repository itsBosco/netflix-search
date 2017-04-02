import React from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import MovieCard from '../MovieCard/MovieCard';

const DirectorDetails = React.createClass({
  getInitialState () {
    return {
      netflixRouletteData: []
    };
  },
  componentDidMount() {
    var params = this.props.match.params;
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
        <Navbar />
        {this.state.netflixRouletteData.map((show) => {
          return (
            <MovieCard key={show.show_id} show={show} />
          );
        })}
      </div>

    );
  }
});

export default DirectorDetails;
