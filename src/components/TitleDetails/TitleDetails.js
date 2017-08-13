import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './titledetails.css'

const TitleDetails = React.createClass({
  getInitialState () {
    return {
      netflixRouletteData: [],
      showCast: [],
      noData: false
    };
  },
  componentDidMount() {
    var params = this.props.match.params;
    axios.get(`https://netflixroulette.net/api/api.php?title=${params.searchValue}`)
      .then((response) => {
        this.setState({netflixRouletteData: response.data});
        this.setState({showCast: this.state.netflixRouletteData.show_cast.split(',')});
      })
      .catch((error) => {
        this.setState({noData: true});
      });
  },

  /* CUSTOM FUNCTIONS */


  /* RENDER */
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
  }
});

export default TitleDetails;
