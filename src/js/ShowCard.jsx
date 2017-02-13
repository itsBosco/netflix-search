import React from 'react';
import { Link } from 'react-router';

const ShowCard = React.createClass({
  getInitialState() {
    return {
      style: {display: 'block'}
    };
  },

  hideBrokenImage() {
    this.setState({ style: {display: 'none'}});
  },

  render() {
    return (
      <Link to={`/title/${this.props.show.show_title}`}>
        <img src={this.props.show.poster} alt=""
          style={this.state.style}
          onError={this.hideBrokenImage} />
      </Link>
    );
  }
});

module.exports = ShowCard;
