import React from 'react';

const ActorSearch = React.createClass({
  render() {
    let netflixRouletteData = this.props.netflixRouletteData;
    return (
      <div>
        <pre><code>{JSON.stringify(netflixRouletteData, null, 4)}</code></pre>
      </div>

    );
  }
});

module.exports = ActorSearch;
