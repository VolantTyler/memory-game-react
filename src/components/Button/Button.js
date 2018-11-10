import React from "react";
import { ButtonStyle } from "./ButtonStyles";

const Button = ({ restartGame, storeScores, label, condition }) => {
  return (
    <ButtonStyle
      label={label}
      onClick={e => {
        condition === "storeScores" ? storeScores() : restartGame(condition);
      }}>
      {label}
    </ButtonStyle>
  );
};

export default Button;
