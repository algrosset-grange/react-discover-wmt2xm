import React from "react";
import tabRouletteEuropeenRules from "./tabRouletteEuropeenRules.js";
export { RouletteEuropeen };

class RouletteEuropeen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sommeDepart: 0,
      sommeActuel: 0,
      prob: 0,
      pileValue: 0,
      nbEpreuve: 1,
      nbSucces: 0,
      nbEchec: 0
    };
    this.ajust = this.ajust.bind(this);
  }

  loiBinomial(nbEpreuve, nbSucces, probaSucces) {
    return (
      this.getCoefficientBinomial(nbEpreuve, nbSucces) *
      Math.pow(probaSucces, nbSucces) *
      Math.pow(1 - probaSucces, nbEpreuve - nbSucces)
    );
  }

  loiGeometrique(probaSucces, nbEchec) {
    return probaSucces * Math.pow(1 - probaSucces, nbEchec);
  }

  ajust(e) {
    if (e.target.id == "sommeAjouter") {
      this.setState({
        pileValue: e.target.value
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        {tabRouletteEuropeenRules()}
        <br />
        <h2>Simulateur</h2>
        <div>
          Somme total : {this.state.sommetotal}
          <br />
          Somme actuelle : {this.state.sommeActuel}
          <br />
          <label for="pile-label">ajouter de l'argent : </label>
          <input type="number" id="sommeAjouter" onChange={this.ajust} />
        </div>
        <div>gain/perte remporté : {this.state.gain}</div>
        mise
      </React.Fragment>
    );
  }
}
