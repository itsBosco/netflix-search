import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './titledetails.css'

const TitleDetails = React.createClass({
  getInitialState () {
    return {
      netflixRouletteData: [],
      showCast: []
    };
  },
  componentDidMount() {
    var params = this.props.match.params;
    axios.get(`http://netflixroulette.net/api/api.php?title=${params.searchValue}`)
      .then((response) => {
        this.setState({netflixRouletteData: response.data});
        this.setState({showCast: this.state.netflixRouletteData.show_cast.split(',')});
      })
      .catch((error) => {
        console.log('netflix roulette error', error);
      });
  },

  /* CUSTOM FUNCTIONS */


  /* RENDER */
  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="image">
          <img src={this.state.netflixRouletteData.poster} alt=""/>
          <p><span>{this.state.netflixRouletteData.summary}</span></p>
        </div>
        <ul className="cast-list">
          {this.state.showCast.map((actor, index) => {
            return (
              <li key={index}>
                <Link to={`/actor/${actor}`}>{actor}</Link>
              ,</li>
            );
          })}
        </ul>
      </div>
    );
  }
});

export default TitleDetails;
