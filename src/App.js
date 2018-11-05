import React, { Component } from "react";
import Board from "./components/Board";
import Gear from "./components/Gear";
import WinModal from "./components/WinModal";
import ScorePanel from "./components/ScorePanel";
import * as Utility from "./utilities/Utilities";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGlasses,
  faFrog,
  faUserSecret,
  faEye,
  faPoo,
  faUserNinja,
  faDice,
  faCannabis,
  faCog,
  faStar,
  faStarHalfAlt
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
import "./App.css";
library.add(
  faGlasses,
  faFrog,
  faUserSecret,
  faEye,
  faPoo,
  faUserNinja,
  faDice,
  faCannabis,
  faCog,
  faStar,
  faStarHalfAlt,
  farFaStar
);

export default class App extends Component {
  state = {
    cards: [],
    blankSlate: [],
    counter: 0,
    firstClick: false,
    initClickCount: 0,
    totalClickCount: 0,
    gearClicked: false,
    timerOn: false,
    win: false,
    seconds: 0,
    minutes: 0,
    stars: ["star", "star", "star"]
  };

  componentWillMount = () => {
    this.handleGameSet("start");
  };

  getCards = () => {
    axios.get("https://api.myjson.com/bins/6wo9q").then(res => {
      if (res.status === 200) {
        this.setState({ cards: Utility.shuffle(res.data) });
      }
    });
  };

  handleCards = cards => {
    this.setState({
      cards
    });
  };

  handleFirstClick = () => {
    this.initTimer();
    this.setState({
      firstClick: true,
      initClickCount: 1,
      timerOn: true
    });
  };

  handleGear = () => {
    this.setState({
      gearClicked: !this.state.gearClicked
    });
  };

  handleCounter = card => {
    if (card.matched) {
      this.setState({ counter: this.state.counter + 1 }, () => {
        if (this.state.counter === 16) {
          this.handleModal();
        }
      });
    }
  };

  handleScore = () => {
    this.setState(
      {
        totalClickCount: this.state.totalClickCount + 1
      },
      this.handleStars()
    );
  };

  handleStars = () => {
    const { totalClickCount, stars } = this.state;
    if (totalClickCount === 9) {
      stars.splice(-1, 1, "star-half-alt");
    } else if (totalClickCount === 13) {
      stars.splice(-1, 1, ["far", "star"]);
    } else if (totalClickCount === 17) {
      stars.splice(1, 1, "star-half-alt");
    } else if (totalClickCount === 21) {
      stars.splice(1, 1, ["far", "star"]);
    } else if (totalClickCount === 25) {
      stars.splice(0, 1, "star-half-alt");
    } else if (totalClickCount === 30) {
      stars.splice(0, 1, ["far", "star"]);
    }
    this.setState({
      stars
    });
  };

  handleModal = () => {
    this.setState({ win: !this.state.win });
  };

  storeScores = () => {
    console.log("storing scores to local storage!");
  };

  handleGameSet = condition => {
    clearInterval(this.timer);
    if (condition === "replay") {
      this.handleModal();
    }
    this.setState(
      {
        cards: [],
        blankSlate: [],
        counter: 0,
        firstClick: false,
        initClickCount: 0,
        totalClickCount: 0,
        gearClicked: false,
        timerOn: false,
        win: false,
        seconds: 0,
        minutes: 0,
        stars: ["star", "star", "star"]
      },
      this.getCards()
    );
  };

  initTimer = () => {
    this.timer = setInterval(() => {
      this.setState(
        {
          seconds: this.state.seconds + 1
        },
        this.checkTime()
      );
    }, 1000);
  };

  checkTime = () => {
    if (this.state.seconds > 59) {
      this.setState({ minutes: this.state.minutes + 1, seconds: 0 });
    }
  };

  changeStyle = e => {
    console.log(e);
  };

  render() {
    return (
      <div className="App">
        <ScorePanel
          restartGame={this.handleGameSet}
          stars={this.state.stars}
          seconds={this.state.seconds}
          minutes={this.state.minutes}
        />
        <Gear
          gearClicked={this.state.gearClicked}
          handleGear={this.handleGear}
          changeStyle={this.changeStyle}
        />
        <Board
          cards={this.state.cards}
          handleCards={this.handleCards}
          handleCounter={this.handleCounter}
          handleFirstClick={this.handleFirstClick}
          initClickCount={this.state.initClickCount}
          handleScore={this.handleScore}
        />
        {this.state.win && (
          <WinModal
            isOpen={this.state.win}
            handleModal={this.handleModal}
            storeScores={this.storeScores}
            restartGame={this.handleGameSet}
          />
        )}
      </div>
    );
  }
}
