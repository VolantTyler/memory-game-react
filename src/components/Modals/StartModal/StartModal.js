import React, { Component } from "react";
import ReactModal from "react-modal";
import * as StartModalStyles from "./StartModalStyles";

export default class StartModal extends Component {
  state = {
    win: null,
    seconds: 0,
    minutes: 0,
    stars: [],
    clicks: 0,
    message: ""
  };
  componentWillReceiveProps = props => {
    this.setState(
      {
        win: props.userData[0],
        seconds: props.userData[1],
        minutes: props.userData[2],
        stars: [...this.state.stars, props.userData[3]],
        clicks: props.userData[4]
      },
      () => this.evalData()
    );
  };
  evalData = () => {
    const { win, seconds, minutes, stars, clicks } = this.state;
    console.log("test");
    console.log(win, seconds, minutes, stars, clicks);
    if (!win && !seconds && !minutes && !clicks) {
      this.setState({
        message: `Looks like you didn't play all the way through your last game!`
      });
    } else {
      this.setState({
        message: `${win ? 'You won your last game' : 'You lost your last game'}, at ${minutes < 10 ? `0${minutes}${seconds}` : `${minutes}:${seconds}`}, and you had ${stars.length === 3 ? stars : stars}, and ${clicks} clicks!`
      })
    }
  };
  render() {
    const { startModalOpen, handleStart } = this.props;
    return (
      <div>
        <ReactModal isOpen={startModalOpen} handleClose={handleStart}>
          {this.state.message}
          <br />
          <button onClick={() => handleStart()}>Play?</button>
        </ReactModal>
        ;
      </div>
    );
  }
}
