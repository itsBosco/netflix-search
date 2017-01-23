const React = require('react');
const axios = require('axios');

const Search = React.createClass({
  getInitialState () {
    return {
      netflixRouletteData: {}
    };
  },
  componentDidMount() {
    axios.get(`http://netflixroulette.net/api/api.php?${this.props.params.category}=${this.props.params.searchValue}`)
      .then((response) => {
        this.setState({netflixRouletteData: response.data});
      })
      .catch((error) => {
        console.log('netflix roulette error', error);
      });
  },
  render() {
    switch (this.props.params.category) {
    case 'title':
      return (
        <div>
          <pre><code>{JSON.stringify(this.state.netflixRouletteData, null, 4)}</code></pre>
          <img src={this.state.netflixRouletteData.poster} alt=""/>
        </div>
      );
    case 'director':
      return (
        <div>
          <pre><code>{JSON.stringify(this.state.netflixRouletteData, null, 4)}</code></pre>
        </div>
      );
    case 'actor':
      return (
        <div>
          <pre><code>{JSON.stringify(this.state.netflixRouletteData, null, 4)}</code></pre>
        </div>
      );
    default:
      return (
        <h1>404</h1>
      );
    }
  }
});

module.exports = Search;
