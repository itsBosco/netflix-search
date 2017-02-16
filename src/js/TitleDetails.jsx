import React from 'react';
import axios from 'axios';
import Header from './Header';

const TitleSearch = React.createClass({
  getInitialState () {
    return {
      netflixRouletteData: []
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
    return (
      <div className="container">
        <Header />
        <img src={this.state.netflixRouletteData.poster} alt=""/>
        <p className="summary-text">{this.state.netflixRouletteData.summary}</p>
      </div>
    );
  }
});

module.exports = TitleSearch;
