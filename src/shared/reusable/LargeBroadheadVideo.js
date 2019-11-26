import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/large-broadhead-video.css';

// import VideoPlayer from './videojs-player/VideoPlayer';

export default class LargeBroadheadVideo extends Component {

  constructor(props) {
    super(props);

    this.video;

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    if ( (this.video.getBoundingClientRect().top < (window.innerHeight / 2) ) && this.video.getBoundingClientRect().top > 0) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  }

  render () {
    return (
      <div className="large-broadhead-video-container">
        <video
          loop
          muted
          playsInline
          poster={this.props.poster}
          src={this.props.src}
          ref={ (video) => { this.video = video } }
        />
      </div>
    );
  }
}
