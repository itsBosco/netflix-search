import React from 'react';

const DirectorSearch = React.createClass({
  render() {
    let netflixRouletteData = this.props.netflixRouletteData;
    return (
      <div>
        <pre><code>{JSON.stringify(netflixRouletteData, null, 4)}</code></pre>
      </div>

    );
  }
});

module.exports = DirectorSearch;
