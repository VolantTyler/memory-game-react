import React from "react";
import * as GameStyles from "../../gameStyles/GameStyles";
import {
  SettingsModalStyled,
  SelectStyle,
  MainSettingsStyle
} from "../Modals/SettingsModal/SettingsModalStyles";

const Settings = ({ handleChange, settingsOpen }) => {
  const { cardOptions } = GameStyles;
  return (
    <SettingsModalStyled isOpen={settingsOpen}>
      <MainSettingsStyle>
        <SelectStyle
          defaultValue="Select a card style..."
          onChange={e => {
            const url = e.target.selectedOptions[0].getAttribute("data-value");
            handleChange(url);
          }}>
          <option disabled>Select a card style...</option>
          {cardOptions.map((style, i) => (
            <option
              key={i}
              value={style.name}
              data-value={style.url}
              tabIndex={-1}>
              {style.name}
            </option>
          ))}
        </SelectStyle>
      </MainSettingsStyle>
    </SettingsModalStyled>
  );
};
export default Settings;
