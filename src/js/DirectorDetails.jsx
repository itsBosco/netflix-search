import React from 'react';
import axios from 'axios';

const DirectorSearch = React.createClass({
  getInitialState () {
    return {
      netflixRouletteData: {}
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
    let netflixRouletteData = this.state.netflixRouletteData;
    return (
      <div>
        <pre><code>{JSON.stringify(netflixRouletteData, null, 4)}</code></pre>
      </div>

    );
  }
});

module.exports = DirectorSearch;
