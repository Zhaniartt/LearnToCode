import React from 'react';
import YouTube from 'react-youtube';
 
class VideoYoutube extends React.Component {
  render() {
    const opts = {
      height: '290',
      width: '540',

      playerVars: { 
        autoplay: 2
      }
    };
 
    return (
      <YouTube
        videoId="NNCwShiwSts"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    event.target.pauseVideo();
  }
}
export default VideoYoutube;