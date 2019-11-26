import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import VideoPlayer from './videojs-player/VideoPlayer';

export default class HeroVideo extends Component {

  render () {
    const videoJsOptions = {
      id: "HeroVid",
      muted: true,
      autoplay: true,
      playsinline: true,
      loop: true,
      controls: true,
      aspectRatio: "16:9",
      preload: "auto",
      poster: this.props.poster,
      sources: [{
        src: this.props.src,
        type: 'video/mp4'
      }]
    }

    const heroVideo = ( props ) => (
      <VideoPlayer { ...videoJsOptions } />
    );
    return heroVideo();
  }
}
