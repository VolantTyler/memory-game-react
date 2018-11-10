import React from "react";
import { ButtonStyle } from "./ButtonStyles";

const Button = ({ restartGame, storeScores, label, condition }) => {
  return (
    <ButtonStyle
      label={label}
      onClick={e => {
        condition === "replay" || condition === "whilePlaying"
          ? restartGame(condition)
          : storeScores();
      }}>
      {label}
    </ButtonStyle>
  );
};

export default Button;
