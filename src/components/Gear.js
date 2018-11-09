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
    const parentStyle = {
      // position: "fixed",
      // top: "5px",
      // right: "5px",
      // display: "grid",
      // gridTemplateColumns: "1fr",
      // gridTemplateRows: "1fr 1fr"
    };
    const gearStyle = {
      fontSize: "3rem",
      color: "rgba(139, 22, 10, 0.3)",
      stroke: "black",
      strokeWidth: "2px",
      filter: "drop-shadow(0 2px 1px #777)"
    };
    return (
      <div>
        {!settingsOpen && (
          <div style={parentStyle}>
            <FontAwesomeIcon
              icon="cog"
              style={gearStyle}
              onClick={e => {
                this.handleClick();
              }}
            />
          </div>
        )}
        {settingsOpen && <Settings handleChange={handleChange} />}
      </div>
    );
  }
}
