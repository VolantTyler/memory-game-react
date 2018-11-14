import React, { Component } from "react";
import Card from "./Card/Card";
import { BoardStyle } from "./BoardStyles";

export default class Board extends Component {
  state = {
    openedCards: []
  };
  handleFlip = card => {
    const { handleCards, handleFirstClick, initClickCount } = this.props;
    const cards = [...this.props.cards];
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
    const { handleCards, handleScore } = this.props;
    const cards = [...this.props.cards];

    const openedCards = [...this.state.openedCards];

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
    const openedCards = [...this.state.openedCards];
    if (openedCards[0].card === openedCards[1].card) {
      this.handleMatch(openedCards[0]);
    } else {
      setTimeout(() => {
        this.flipEmBack();
      }, 300);
    }
    this.setState({
      openedCards: []
    });
  };

  handleMatch = cardToMatch => {
    const { handleCards, handleCounter } = this.props;
    const cards = [...this.props.cards];
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
    const { handleCards } = this.props;
    const cards = [...this.props.cards];
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
    return (
      <BoardStyle>
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
      </BoardStyle>
    );
  }
}
