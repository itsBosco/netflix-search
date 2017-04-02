import React from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

const TitleDetails = React.createClass({
  getInitialState () {
    return {
      netflixRouletteData: []
    };
  },
  componentDidMount() {
    var params = this.props.match.params;
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
        <Navbar />
        <img src={this.state.netflixRouletteData.poster} alt=""/>
        <p className="summary-text">{this.state.netflixRouletteData.summary}</p>
        <p>
          {this.state.netflixRouletteData.show_cast}
        </p>
      </div>
    );
  }
});

export default TitleDetails;
