import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default class VolumeSlide extends Component {
  state = {
    value: 50
  };
  handleSliderChange = value => {
    console.log(value);
    const { handleVolumeSlide } = this.props;
    this.setState({
      value
    });
    handleVolumeSlide(value);
  };
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Slider
          min={0}
          max={100}
          step={10}
          defaultValue={50}
          value={this.state.value}
          onChange={e => this.handleSliderChange(e)}
        />
      </div>
    );
  }
}
