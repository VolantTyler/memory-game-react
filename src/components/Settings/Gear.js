import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GearStyled } from "./SettingsStyles";
import Settings from "./Settings";

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
    const { changeStyle } = this.props;
    this.setState({
      settingsOpen: !this.state.settingsOpen
    });
    changeStyle(url);
  };
  render() {
    const { handleChange } = this;
    const { settingsOpen } = this.state;
    return (
      <div>
        {!settingsOpen && (
          <GearStyled>
            <FontAwesomeIcon
              icon="cog"
              onClick={e => {
                this.handleClick();
              }}
            />
          </GearStyled>
        )}
        {settingsOpen && (
          <Settings handleChange={handleChange} settingsOpen={settingsOpen} />
        )}
      </div>
    );
  }
}
