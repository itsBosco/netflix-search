const React = require('react');

const DirectorSearch = React.createClass({
  render() {
    return (
      <div>
        <pre><code>{JSON.stringify(this.props.netflixRouletteData, null, 4)}</code></pre>
      </div>

    );
  }
});

module.exports = DirectorSearch;
