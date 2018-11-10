import React from "react";
import * as GameStyles from "../../gameStyles/GameStyles";
import * as SettingsStyles from "./SettingsStyles";

const Settings = ({ handleChange }) => {
  const { cardOptions } = GameStyles;
  const { MainSettingsStyle, SelectStyle } = SettingsStyles;
  return (
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
  );
};
export default Settings;
