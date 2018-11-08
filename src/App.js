import React, { Component } from "react";
import Board from "./components/Board";
import Gear from "./components/Gear";
import WinModal from "./components/WinModal";
import ScorePanel from "./components/ScorePanel";
import Sounds from "./audio/LoopAudio";
import * as Utility from "./utilities/Utilities";
import axios from "axios";
import "./App.css";
import * as GameStyles from "./gameStyles/GameStyles";
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
    stars: ["star", "star", "star"],
    volume: 50
  };

  componentWillMount = () => {
    this.handleGameSet("start", GameStyles.styleURLs[0].url);
  };

  componentDidMount = () => {
    console.log(GameStyles.styleURLs[0].url);
  };

  getCards = url => {
    axios
      .get(url)
      .then(res => {
        if (res.status === 200) {
          console.log(res);
          console.log(
            `All good! Data fetched, styles applied and stored. Status: ${
              res.status
            }`
          );
          this.setState({ cards: Utility.shuffle(res.data) });
        }
      })
      .catch(err => {
        console.log(
          `Failed to fetch JSON data, which contains card and other styling options, from the server: ${err}`
        );
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

  initTimer = () => {
    this.timer = setInterval(() => {
      this.setState(
        {
          seconds: this.state.seconds + 1
        },
        () => this.checkTime()
      );
    }, 1000);
  };

  checkTime = () => {
    const { seconds, minutes } = this.state;
    if (seconds > 59) {
      this.setState({ minutes: minutes + 1, seconds: 0 });
    }
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

  handleModal = () => {
    this.setState({ win: !this.state.win });
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

  storeScores = () => {
    console.log("storing scores to local storage!");
  };

  handleGameSet = (condition, url = GameStyles.styleURLs[0].url) => {
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
      this.getCards(url)
    );
  };

  handleVolumeSlide = value => {
    const { volume } = this.state;
    console.log(value);
    this.setState(
      {
        volume: value
      },
      () => console.log(volume)
    );
  };

  changeStyle = url => {
    this.handleGameSet("resetStyle", url);
  };

  render() {
    const {
      handleGameSet,
      handleVolumeSlide,
      handleGear,
      changeStyle,
      handleCards,
      handleCounter,
      handleFirstClick,
      handleScore,
      handleModal,
      storeScores
    } = this;
    const {
      cards,
      stars,
      seconds,
      minutes,
      gearClicked,
      initClickCount,
      firstClick,
      win,
      volume
    } = this.state;
    return (
      <div className="App">
        <ScorePanel
          restartGame={handleGameSet}
          stars={stars}
          seconds={seconds}
          minutes={minutes}
          handleVolumeSlide={handleVolumeSlide}
          volume={volume}
        />
        <Gear
          gearClicked={gearClicked}
          handleGear={handleGear}
          changeStyle={changeStyle}
        />
        <Board
          cards={cards}
          handleCards={handleCards}
          handleCounter={handleCounter}
          handleFirstClick={handleFirstClick}
          initClickCount={initClickCount}
          handleScore={handleScore}
        />
        {win && (
          <WinModal
            isOpen={win}
            handleModal={handleModal}
            storeScores={storeScores}
            restartGame={handleGameSet}
            stars={stars}
          />
        )}
        <Sounds
          loopVolume={volume}
          firstClick={firstClick}
          initClickCount={initClickCount}
        />
      </div>
    );
  }
}
