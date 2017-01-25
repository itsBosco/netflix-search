import React from 'react';

const ActorSearch = React.createClass({
  render() {
    return (
      <div>
        <pre><code>{JSON.stringify(this.props.netflixRouletteData, null, 4)}</code></pre>
      </div>

    );
  }
});

module.exports = ActorSearch;
