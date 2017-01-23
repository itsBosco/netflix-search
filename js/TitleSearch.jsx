const React = require('react');

const TitleSearch = React.createClass({
  render() {
    return (
      <div>
        <pre><code>{JSON.stringify(this.props.netflixRouletteData, null, 4)}</code></pre>
        <img src={this.props.netflixRouletteData.poster} alt=""/>
      </div>
    );
  }
});

module.exports = TitleSearch;
