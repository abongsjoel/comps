import React from "react";
import Button from "./Button";

export default class ClassComp extends React.Component {
  state = {
    count: 1,
    character: {},
  };

  add = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  subtract = () => {
    this.setState((prevState) => ({
      count: prevState.count > 1 ? prevState.count - 1 : 1,
    }));
  };

  getStartWarsCharacter = (id) => {
    // fetch(`https://swapi.dev/api/people/${id}`, { mode: "no-cors" })
    //   .then((res) => res.json())
    //   .then((data) => this.setState({ character: data }));

    const data = {
      name: `Thierry the ${id} ${
        id === 1 ? "st" : id === 2 ? "nd" : id === 3 ? "rd" : "th"
      }`,
    };

    this.setState({ character: data });
  };

  componentDidMount() {
    this.getStartWarsCharacter(this.state.count);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      this.getStartWarsCharacter(this.state.count);
    }
  }

  render() {
    return (
      <section>
        <div className="flex">
          <Button onClick={this.subtract}>-</Button>
          <div className="p-4 border border-green-100 bg-green-200 rounded-full">
            {this.state.count}
          </div>
          <Button onClick={this.add}>+</Button>
        </div>
        <div>{this.state.character.name || "Loading..."}</div>
      </section>
    );
  }
}
