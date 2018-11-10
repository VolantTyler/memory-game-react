import React from "react";
import * as GameStyles from "../../gameStyles/GameStyles";

const Settings = ({ handleChange }) => {
  const { settingsStyle, styles } = GameStyles;
  return (
    <div>
      <select
        style={settingsStyle}
        defaultValue="Select a card style..."
        onChange={e => {
          e.stopPropagation();
          const url = e.target.value;
          handleChange(url);
        }}>
        <option disabled>Select a card style...</option>
        {styles.map((style, i) => (
          <option key={i} value={style.url}>
            {style.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Settings;
