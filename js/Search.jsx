const React = require('react');
const axios = require('axios');

const Search = React.createClass({
  getInitialState () {
    return {
      netflixRouletteData: {}
    };
  },
  componentDidMount() {
    axios.get(`http://netflixroulette.net/api/api.php?title=${this.props.params.searchValue}`)
      .then((response) => {
        this.setState({netflixRouletteData: response.data});
      })
      .catch((error) => {
        console.log('netflix roulette error', error);
      });
  },
  render() {
    return (
      <div>
        <pre><code>{JSON.stringify(this.state.netflixRouletteData, null, 4)}</code></pre>
      </div>
    );
  }
});

module.exports = Search;
