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
    let show = this.props.show;
    return (
      <img src={show.poster} alt=""
        style={this.state.style}
        onError={this.hideBrokenImage} />
    );
  }
});

module.exports = ShowCard;
