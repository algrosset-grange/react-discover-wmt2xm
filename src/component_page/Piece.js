import React from "react";
export { Piece };

class Piece extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prob: 0,
      firstValue: 50,
      secondValue: 50
    };
    this.ajust = this.ajust.bind(this);
  }

  ajust(e) {
    if (e.target.id == "proba-first-event-input") {
      this.setState({
        firstValue: e.target.value,
        secondValue: 100 - e.target.value
      });
    }
    if (e.target.id == "proba-second-event-input") {
      this.setState({
        secondValue: e.target.value,
        firstValue: 100 - e.target.value
      });
    }
  }

  render() {
    return (
      <div>
        <label for="proba-first-event-input">Premier event: </label>
        <input
          type="number"
          min="0"
          max="100"
          id="proba-first-event-input"
          value={this.state.firstValue}
          onChange={this.ajust}
        />{" "}
        %
        <br />
        <label for="proba-second-event-input">Second event: </label>
        <input
          type="number"
          min="0"
          max="100"
          id="proba-second-event-input"
          value={this.state.secondValue}
          onChange={this.ajust}
        />{" "}
        %
      </div>
    );
  }
}
