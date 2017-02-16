import React from 'react';
import { Link } from 'react-router';
import '../scss/showcard.scss';

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
        <Link className="show-card" to={`/title/${this.props.show.show_title}`}>
          <img src={this.props.show.poster} alt={this.props.show.show_title}
            style={this.state.style}
            onError={this.hideBrokenImage} />
          <p className="hover-text">View Details</p>
        </Link>
    );
  }
});

module.exports = ShowCard;
