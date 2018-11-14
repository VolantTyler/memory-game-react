import React, { Component } from "react";
import tock from "../../components/audio/sounds/tock.mp3";

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
        audio
      });
    } else {
      this.setState({
        playing: false
      });
    }
  }, 1025);

  componentWillReceiveProps = props => {
    const { firstClick, win } = props;
    if (firstClick) {
      this.setState({
        playing: true
      });
    }
    if (win) {
      this.setState({
        playing: false
      });
    }
  };
  render() {
    return (
      <div style={{ display: "none" }}>
        Audio is brought to you by the letter <em>A</em>
      </div>
    );
  }
}
