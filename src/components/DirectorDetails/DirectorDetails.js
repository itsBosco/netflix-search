import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import MovieCard from '../MovieCard/MovieCard';

const DirectorDetails = React.createClass({
  getInitialState () {
    return {
      netflixRouletteData: [],
      noData: false
    };
  },
  componentDidMount() {
    var params = this.props.match.params;
    axios.get(`http://netflixroulette.net/api/api.php?director=${params.searchValue}`)
      .then((response) => {
        this.setState({netflixRouletteData: response.data});
      })
      .catch((error) => {
        this.setState({noData: true});
      });
  },
  render() {
    if(this.state.noData) {
      return (
        <div className="container">
          <Header />
          <h1>Sorry, no results found. :(</h1>
        </div>
      ); 
    } else {
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
  }
});

export default DirectorDetails;
