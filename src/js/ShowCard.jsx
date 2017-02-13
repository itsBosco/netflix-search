import React from 'react';

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
      <img src={this.props.show.poster} alt=""
        style={this.state.style}
        onError={this.hideBrokenImage} />
    );
  }
});

module.exports = ShowCard;
