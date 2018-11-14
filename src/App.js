import React, { Component } from "react";
import Board from "./components/Board/Board";
import WinModal from "./components/Modals//WinModal/WinModal";
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
import StartModal from "./components/Modals/StartModal/StartModal"; // still to be implemented based on success using localStorage
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
  faChessRook // end chess set
);

export default class App extends Component {
  state = {
    // startModalOpen: true, // to be implemented
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
    volume: 50,
    userData: []
    // parentUnmatched: GameStyles, // will be used to offer custom theme colors
    // parentMatched: GameStyles,
    // springStyle: GameStyles,
    // cardNotFlippedStyle: GameStyles
  };

  componentWillMount = () => {
    this.handleGameSet("start", GameStyles.cardOptions[0].url);
    const userData = Utility.storeAndGet("get");
    this.setState({ userData });
  };

  componentDidMount = () => {
    console.log(GameStyles.cardOptions[0].url);
  };

  /*
  1) make getting all cards === 16 moves 1,000 pts. 
  For every star lost, lose 200 points. Complete the game, you still get 400 points, regardless of time (for now). 

  It needn't always be stars -- other icons could be funny, too :) 

  - put volume slider and other non-score stuff on the Settings modal. 

  - continue working out how to: look to localStorage to return a leaderboard. Starter (first-time-ever) modal should ask for player's name and allow them to choose one of three difficulty levels. Use `onMouseOver` & `onMouseLeave` to show/hide tooltips explaining how each difficulty works. 

  - difficulty levels: 1) regular gameplay, 2) two unmatched cards switch after 10-15 seconds with two other cards in the deck, and 3) all unmatched cards switch places with other unmatched cards after 15-20 seconds with no match. Perhaps a countdown would work best for the last level (or last two)? Or implement a sensible balance of these ideas even starting from the first level. Or maybe tricky cards get slipped into the deck, and if they're not found within 5-10 seconds, two cards get matched by the game itself, meaning the player loses those points?! 

  Add in levels. Since I'm storing both the original, static deck and the one changing as cards' characteristics change. That means I can implement an on-screen 10-second countdown warning users that the deck will be reshuffled -- cards already matched stay matched, but the unmatched cards randomly switch places with each other (the matched cards don't move). Use each card's `id` as a means of assigning their positions in the array (every matched set maintains its current index in the array, which will entail getting back a fully shuffled deck and placing matched cards in their original positions, placing matched cards specifically into an array of a set 16 index length, and then checking cards that go in to ensure they're not duplicates of matched cards set for specific spots in the deck -- if there are duplicates, removing them from the incoming array -- remember, three arrays involved: the original, static deck, an array of the matched cards, and an array of the newly shuffled deck that must be shuffled even if the matchedCards.length === 0). Lots of logic to implement, but seems completely doable. 
  */

  getCards = url => {
    axios
      .get(url)
      .then(res => {
        if (res.status === 200) {
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
      Utility.storeAndGet(
        "store",
        win,
        seconds,
        minutes,
        stars,
        totalClickCount
      );
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
    const { totalClickCount } = this.state;
    const newStars = [...this.state.stars];
    if (totalClickCount === 12) {
      newStars.splice(-1, 1, "star-half-alt");
    } else if (totalClickCount === 17) {
      newStars.splice(-1, 1, ["far", "star"]);
    } else if (totalClickCount === 22) {
      newStars.splice(1, 1, "star-half-alt");
    } else if (totalClickCount === 27) {
      newStars.splice(1, 1, ["far", "star"]);
    } else if (totalClickCount === 32) {
      newStars.splice(0, 1, "star-half-alt");
    } else if (totalClickCount === 37) {
      newStars.splice(0, 1, ["far", "star"]);
    }
    this.setState({
      stars: newStars
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
        this.getCards(url);
      }
    );
  };

  handleVolumeSlide = value => {
    this.setState({
      volume: value
    });
  };

  changeStyle = url => {
    this.handleGameSet("resetStyle", url);
  };

  handleStart = e => {
    this.setState({
      startModalOpen: !this.state.startModalOpen
    });
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
      storeScores,
      handleStart
    } = this;
    const {
      startModalOpen,
      cards,
      stars,
      seconds,
      minutes,
      gearClicked,
      initClickCount,
      firstClick,
      win,
      volume,
      userData
    } = this.state;
    return (
      <div className="App" style={{ width: "100vw" }}>
        {/* {startModalOpen && (
          <StartModal
            startModalOpen={startModalOpen}
            userData={userData}
            handleStart={handleStart}
          />
        )} */}
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
