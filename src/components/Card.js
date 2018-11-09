import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spring } from "react-spring";
import * as GameStyles from "../gameStyles/GameStyles";

class Card extends Component {
  state = {
    style: GameStyles.colorProfiles[0].flippedCardStyle,
    parentStyle: GameStyles.colorProfiles[0].cardStyle
  };
  handleClick = (e, card) => {
    const { handleFlip } = this.props;
    if (!card.cardFlipped) {
      handleFlip(card);
    }
  };

  render() {
    const { card, matched, clickable } = this.props;
    const { parentStyle, style } = this.state;
    const { cardStyle, matchedCardStyle } = GameStyles.colorProfiles[0];
    return (
      <div
        style={!matched ? cardStyle : matchedCardStyle}
        onClick={
          !clickable
            ? null
            : e => {
                this.handleClick(e, card);
              }
        }>
        {!card.cardFlipped ? (
          <div style={parentStyle} />
        ) : (
          <Spring from={{ opacity: 0 }} to={style}>
            {props => (
              <div style={props}>
                <FontAwesomeIcon icon={`${card.card}`} />
              </div>
            )}
          </Spring>
        )}
      </div>
    );
  }
}

export default Card;
