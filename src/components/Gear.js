import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Settings from "../components/Settings";

export default class Gear extends Component {
  state = {
    settingsOpen: false
  };

  handleClick = () => {
    this.setState({
      settingsOpen: true
    });
  };

  handleChange = url => {
    console.log(url);
    const { changeStyle } = this.props;
    this.setState({
      settingsOpen: !this.state.settingsOpen
    });
    changeStyle(url);
  };
  render() {
    const { handleChange } = this;
    const { settingsOpen } = this.state;
    const gearStyle = {
      position: "fixed",
      fontSize: "5.5rem",
      top: "-7px",
      right: "7px"
    };
    return (
      <div
        onClick={e => {
          this.handleClick();
        }}
        style={gearStyle}>
        <FontAwesomeIcon icon="cog" />
        {settingsOpen && <Settings handleChange={handleChange} />}
      </div>
    );
  }
}
