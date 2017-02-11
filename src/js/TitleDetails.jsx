import React from 'react';
import axios from 'axios';
import '../scss/TitleDetails.scss';

const TitleSearch = React.createClass({
  getInitialState () {
    return {
      netflixRouletteData: {}
    };
  },
  componentDidMount() {
    var params = this.props.params;
    axios.get(`http://netflixroulette.net/api/api.php?title=${params.searchValue}`)
      .then((response) => {
        this.setState({netflixRouletteData: response.data});
      })
      .catch((error) => {
        console.log('netflix roulette error', error);
      });
  },
  render() {
    let netflixRouletteData = this.state.netflixRouletteData;
    return (
      <div className="container">
        <img src={netflixRouletteData.poster} alt=""/>
        <p className="summary-text">{netflixRouletteData.summary}</p>
      </div>
    );
  }
});

module.exports = TitleSearch;
