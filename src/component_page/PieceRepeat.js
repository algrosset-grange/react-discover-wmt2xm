import React from "react";
export { PieceRepeat };
import loiBinomial from "./operation/loiBinomial.js";
import loiGeometrique from "./operation/loiGeometrique.js";

class PieceRepeat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prob: 0,
      pileValue: 50,
      nbEpreuve: 1,
      nbSucces: 0,
      nbEchec: 0
    };
    this.ajust = this.ajust.bind(this);
  }

  ajust(e) {
    if (e.target.id == "pile-input") {
      this.setState({
        pileValue: e.target.value
      });
    }
    if (e.target.id == "nb-experience-input") {
      this.setState({
        nbEpreuve: e.target.value
      });
    }
    if (e.target.id == "nb-succes-input") {
      this.setState({
        nbSucces: e.target.value
      });
    }
    if (e.target.id == "nb-echec-input") {
      this.setState({
        nbEchec: e.target.value
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <label for="pile-label">Pile : </label>
          <input
            type="number"
            min="0"
            max="100"
            id="pile-input"
            value={this.state.pileValue}
            onChange={this.ajust}
          />
          {" %"}
        </div>
        <div>Face : {100 - this.state.pileValue} %</div>

        <div>
          nombre d'essais :{" "}
          <input
            type="number"
            min="0"
            id="nb-experience-input"
            value={this.state.nbEpreuve}
            onChange={this.ajust}
          />
        </div>

        <div>
          Remarque : En moyenne, vous obtenez au moins 1 pile en{" "}
          {Math.round((10 * 1) / (this.state.pileValue / 100)) / 10} tentatives
        </div>
        <div>
          probabilité d'obtenir{" "}
          <input
            type="number"
            min="0"
            id="nb-succes-input"
            value={this.state.nbSucces}
            onChange={this.ajust}
          />{" "}
          pile :{" "}
          {loiBinomial(
            this.state.nbEpreuve,
            this.state.nbSucces,
            this.state.pileValue / 100
          )}
        </div>
        <div>
          Probabilité d'obtenir un pile après{" "}
          <input
            type="number"
            min="0"
            id="nb-echec-input"
            value={this.state.nbEchec}
            onChange={this.ajust}
          />{" "}
          faces :{" "}
          {loiGeometrique(this.state.pileValue / 100, this.state.nbEchec) * 100}
          %
        </div>
      </div>
    );
  }
}
