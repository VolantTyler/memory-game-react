//add button to escape or exit settings modal

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EscapeStyled } from "./SettingsStyles";
import Settings from "./Settings";

export default class Escape extends Component {
  state = {
    settingsOpen: true
  };

  handleClick = () => {
    this.setState({
      settingsOpen: false
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
          <EscapeStyled>
            <FontAwesomeIcon
              icon="times-circle"
              onClick={e => {
                this.handleClick();
              }}
            />
          </EscapeStyled>
        )}
        {settingsOpen && (
          <Settings handleChange={handleChange} settingsOpen={settingsOpen} />
        )}
      </div>
    );
  }
}
