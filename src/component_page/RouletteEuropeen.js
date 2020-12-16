import React from "react";
import tabRouletteEuropeenRules from "./texte/tabRouletteEuropeenRules.js";
export { RouletteEuropeen };

class RouletteEuropeen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sommetotal: 0,
      sommeDepart: 0,
      sommeActuel: 0,
      prob: 0,
      pileValue: 0,
      nbEpreuve: 1,
      nbSucces: 0,
      nbEchec: 0
    };
    this.ajust = this.ajust.bind(this);
    this.addMise = this.addMise.bind(this);
  }

  addMise() {
    alert("on y est");
    let add_mise = document.getElementById("sommeAjouter");
    if (add_mise.value != "")
      this.setState({
        sommeDepart: this.state.sommeDepart + add_mise.value
      });
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
          somme de départ : {this.state.sommeDepart}
          <br />
          Somme actuelle : {this.state.sommeActuel}
          <br />
          <label for="pile-label">ajouter de l'argent : </label>
          <input type="number" id="sommeAjouter" />
          <button onclick={this.addMise}>ajouter</button>
        </div>
        <div>gain/perte remporté : {this.state.gain}</div>
        <div>mise : </div>
      </React.Fragment>
    );
  }
}
