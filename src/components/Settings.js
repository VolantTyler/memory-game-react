import React from "react";
import * as GameStyles from "../gameStyles/GameStyles";

const Settings = ({ changeStyle }) => {
  const { settingsStyle, styleURLs } = GameStyles;
  return (
    <div>
      <div style={settingsStyle}>
        <ul
          style={{
            listStyleType: "none",
            fontSize: "1.3rem",
            top: "2rem",
            right: "2rem"
          }}>
          {styleURLs.map((style, i) => {
            console.log(style);
            return (
              <li key={i} onClick={e => changeStyle(style.url)}>
                {style.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Settings;
