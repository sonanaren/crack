import React, { Component } from 'react';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: this.props.imgSrc,
    };
  }

  render() {
    return (
      <img alt="banner" src={this.state.imgSrc} className="banner-image" />
    );
  }
}

export default Banner;
