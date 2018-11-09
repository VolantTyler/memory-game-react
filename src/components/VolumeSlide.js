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
    const genStyle = { backgroundColor: "rgba(139, 22, 10, 0.3)" };
    return (
      <div
        style={{
          width: "80%",
          background: "transparent",
          appearance: "none",
          pointer: "cursor"
        }}>
        <Slider
          min={0}
          max={100}
          step={10}
          dots={true}
          defaultValue={50}
          value={this.state.value}
          onChange={e => this.handleSliderChange(e)}
          handleStyle={{
            borderColor: "rgba(7, 7, 7, 0.2)",
            backgroundColor: genStyle
          }}
          trackStyle={genStyle}
          railStyle={{ genStyle, height: "3px" }}
          dotStyle={genStyle}
          activeDotStyle={genStyle}
        />
      </div>
    );
  }
}
