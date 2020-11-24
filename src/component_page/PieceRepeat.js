import React from "react";
export { PieceRepeat };

class PieceRepeat extends React.Component {
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
        <div>
          <label for="proba-first-event-input">Pile : </label>
          <input
            type="number"
            min="0"
            max="100"
            id="proba-first-event-input"
            value={this.state.firstValue}
            onChange={this.ajust}
          />
        </div>
        <div>
          <label for="proba-second-event-input">Second événement: </label>
          <input
            type="number"
            min="0"
            max="100"
            id="proba-second-event-input"
            value={this.state.secondValue}
            onChange={this.ajust}
          />
        </div>

        <div>
          nombre d'essais avant d'avoir au moins <input
            type="number"
            min="0"
            id="nb-serie"
            value={}
            onChange={}
          />
           de chance réussir à obtenir le premier événement : {1} répétition{1 > 1 && 's'}
          <br />
          chance d'obtenir une série de <input
            type="number"
            min="0"
            id="nb-serie"
            value={}
            onChange={}
          /> premier événement à la suite : {}
        </div>
      </div>
    );
  }
}
