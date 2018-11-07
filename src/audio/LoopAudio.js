import React, { Component } from "react";
import tock from "../sounds/tock.mp3";

export default class LoopAudio extends Component {
  state = {
    volume: this.props.loopVolume,
    playing: false,
    audio: new Audio(tock)
  };

  timer = setInterval(() => {
    const { audio } = this.state;
    const { loopVolume } = this.props;
    if (this.state.playing && this.props.initClickCount !== 0) {
      audio.playbackRate = 0.8;
      audio.volume = loopVolume / 100;
      audio.play();
      this.setState({
        audio: audio
      });
    } else {
      this.setState({
        playing: false
      });
    }
  }, 1025);

  componentWillReceiveProps = props => {
    const { firstClick } = props;
    if (firstClick) {
      this.setState({
        playing: true
      });
    }
  };
  render() {
    return <div />;
  }
  // sound works, but need to change this to a class and use methods to alter playback speed of some audio (tock, specifically)
}

// const audio = document.querySelector(".audio").volume;
// console.log(audio);
