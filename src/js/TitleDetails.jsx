import React from 'react';

const TitleSearch = React.createClass({
  render() {
    let netflixRouletteData = this.props.netflixRouletteData;
    return (
      <div>
        <pre><code>{JSON.stringify(netflixRouletteData, null, 4)}</code></pre>
        <img src={netflixRouletteData.poster} alt=""/>
      </div>
    );
  }
});

module.exports = TitleSearch;
