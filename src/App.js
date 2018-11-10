import React, { Component } from "react";
import Board from "./components/Board/Board";
import WinModal from "./components/Modal/WinModal";
import ScorePanel from "./components/ScorePanel/ScorePanel";
import LoopAudio from "./components/audio/LoopAudio";
import * as GameStyles from "./gameStyles/GameStyles";
import * as Utility from "./utilities/Utilities";
import axios from "axios";
import "./App.css";
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
  faStarHalfAlt, // end basic set
  faBath,
  faChair,
  faCarSide,
  faHome,
  faTv,
  faTree,
  faBed,
  faCouch, // end home set
  faAngry,
  faBong,
  faBookDead,
  faBrain,
  faCodeBranch,
  faFlushed,
  faDharmachakra,
  faDragon, // end oddball set
  faChess,
  faChessBishop,
  faChessBoard,
  faChessKing,
  faChessKnight,
  faChessQueen,
  faChessPawn,
  faChessRook
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
export const Library = library.add(
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
  farFaStar, // end basic style
  faBath,
  faChair,
  faCarSide,
  faHome,
  faTv,
  faTree,
  faBed,
  faCouch, // end home set
  faAngry,
  faBong,
  faBookDead,
  faBrain,
  faCodeBranch,
  faFlushed,
  faDharmachakra,
  faDragon, // end oddball set
  faChess,
  faChessBishop,
  faChessBoard,
  faChessKing,
  faChessKnight,
  faChessQueen,
  faChessPawn,
  faChessRook
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
    stars: ["star", "star", "star"],
    volume: 50
    // parentUnmatched: GameStyles, // will be used to offer custom styling
    // parentMatched: GameStyles,
    // springStyle: GameStyles,
    // cardNotFlippedStyle: GameStyles
  };

  componentWillMount = () => {
    this.handleGameSet("start", GameStyles.cardOptions[0].url);
  };

  componentDidMount = () => {
    console.log(GameStyles.cardOptions[0].url);
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
    const { seconds, minutes, win } = this.state;
    console.log(win);
    if (seconds > 59) {
      this.setState({ minutes: minutes + 1, seconds: 0 });
    }
    if (win) {
      clearInterval(this.timer);
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
    this.setState({ win: !this.state.win }, () => {
      const { win, seconds, minutes, stars, totalClickCount } = this.state;
      Utility.storeAndGet(win, seconds, minutes, stars, totalClickCount);
    });
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
    if (totalClickCount === 12) {
      stars.splice(-1, 1, "star-half-alt");
    } else if (totalClickCount === 17) {
      stars.splice(-1, 1, ["far", "star"]);
    } else if (totalClickCount === 22) {
      stars.splice(1, 1, "star-half-alt");
    } else if (totalClickCount === 27) {
      stars.splice(1, 1, ["far", "star"]);
    } else if (totalClickCount === 32) {
      stars.splice(0, 1, "star-half-alt");
    } else if (totalClickCount === 37) {
      stars.splice(0, 1, ["far", "star"]);
    }
    this.setState({
      stars
    });
  };

  storeScores = () => {
    console.log("storing scores to local storage!");
  };

  handleGameSet = (condition, url = GameStyles.cardOptions[0].url) => {
    console.log(condition);
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
      () => {
        clearInterval(this.timer);
        console.log(this);
        this.getCards(url);
      }
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
            seconds={seconds}
            minutes={minutes}
          />
        )}
        <LoopAudio
          loopVolume={volume}
          firstClick={firstClick}
          initClickCount={initClickCount}
          win={win}
        />
      </div>
    );
  }
}
