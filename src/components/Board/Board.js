import React, { Component } from "react";
import Card from "./Card";
import * as GameStyles from "../../gameStyles/GameStyles";

export default class Board extends Component {
  state = {
    openedCards: []
  };
  handleFlip = card => {
    const { cards, handleCards, handleFirstClick, initClickCount } = this.props;
    const openedCards = [];

    if (initClickCount === 0) {
      handleFirstClick();
    }

    cards.map(staticCard => {
      if (card.id === staticCard.id) {
        staticCard.cardFlipped = true;
        openedCards.push(staticCard);
      }
      return card;
    });

    handleCards(cards);
    this.setState(
      {
        openedCards: [...this.state.openedCards, ...openedCards]
      },
      () => {
        this.preEval();
      }
    );
  };

  preEval = () => {
    const { cards, handleCards, handleScore } = this.props;
    const { openedCards } = this.state;

    handleScore();

    if (openedCards.length === 2) {
      cards.map(card => {
        card.clickable = false;
        return card;
      });

      handleCards(cards);
      setTimeout(() => {
        this.evalMatch();
      }, 250);
    }
  };

  evalMatch = () => {
    const { openedCards } = this.state;
    if (openedCards[0].card === openedCards[1].card) {
      this.handleMatch(openedCards[0]);
    } else {
      setTimeout(() => {
        this.flipEmBack();
      }, 250);
    }
    this.setState({
      openedCards: []
    });
  };

  handleMatch = cardToMatch => {
    const { cards, handleCards, handleCounter } = this.props;
    cards.map(card => {
      if (cardToMatch.card === card.card) {
        card.matched = true;
        handleCounter(card);
      }
      return card;
    });
    handleCards(cards);
    this.flipEmBack();
  };

  flipEmBack = () => {
    const { cards, handleCards } = this.props;
    cards.map(card => {
      if (!card.matched) {
        card.cardFlipped = false;
        card.clickable = true;
      }
      return card;
    });
    handleCards(cards);
  };
  render() {
    const { cards } = this.props;
    const { boardStyle } = GameStyles;
    return (
      <div style={boardStyle}>
        {cards.map((card, i) => {
          return (
            <Card
              key={i}
              card={card}
              matched={card.matched}
              handleFlip={this.handleFlip}
              clickable={card.clickable}
            />
          );
        })}
      </div>
    );
  }
}
