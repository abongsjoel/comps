import React from "react";
import ClassComp from "../components/ClassComp";
import WindowTracker from "../components/WindowTracker";
import Button from "../components/Button";

export default class ClassCompPage extends React.Component {
  state = {
    showTracker: true,
  };

  render() {
    return (
      <div>
        <ClassComp />
        <br />
        <Button
          primary
          rounded
          outline
          onClick={() =>
            this.setState((prevState) => ({
              showTracker: !prevState.showTracker,
            }))
          }
        >
          Toogle Window Tracker
        </Button>
        {this.state.showTracker && <WindowTracker />}
      </div>
    );
  }
}
