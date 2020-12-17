import React from "react";
import tabRouletteEuropeenRules from "./texte/tabRouletteEuropeenRules.js";
export { RouletteEuropeen };

class RouletteEuropeen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sommeDepart: 0,
      gainOrLose: 0,
      sommeActuel: 0
    };
    this.ajust = this.ajust.bind(this);
    this.addMise = this.addMise.bind(this);
  }

  addMise() {
    let add_mise = document.getElementById("sommeAjouter");
    if (add_mise.value != "")
      this.setState({
        sommeDepart: this.state.sommeDepart + Number(add_mise.value)
      });
  }

  reset() {
    this.setState({
      sommetotal: 0,
      sommeDepart: 0,
      gainOrLose: 0,
      sommeActuel: 0
    });
  }

  ajust(e) {
    if (e.target.id == "sommeAjouter") {
      this.setState({});
    }
  }

  getTypeMise() {}

  onChangeTypeMise(event) {
    switch (event.target.value) {
      case "1":
        console.log("ça passe");
        break;
      case "2":
        break;
      default:
        return;
        break;
    }
  }

  render() {
    return (
      <React.Fragment>
        {tabRouletteEuropeenRules()}
        <br />
        <h2>Simulateur</h2>
        <div>
          somme de départ : {this.state.sommeDepart}
          <br />
          Somme actuelle : {this.state.sommeActuel}
          <br />
          <label for="pile-label">ajouter de l'argent : </label>
          <input type="number" id="sommeAjouter" />
          <button onClick={this.addMise}>ajouter</button>
        </div>
        <div>gain/perte remporté : {this.state.gain}</div>
        <button onClick={this.reset}>reset</button>
        <div>mise : </div>
        <div onChange={this.onChangeTypeMise}>
          <input type="radio" value="1" name="gender" /> Plein (1 cases)
          <br />
          <input type="radio" value="2" name="gender" /> à cheval (2 cases)
          <br />
          <input type="radio" value="3" name="gender" /> transversale (3 cases)
          <br />
          <input type="radio" value="6" name="gender" /> sizain (6 cases)
          <br />
          <input type="radio" value="12" name="gender" /> douzaine (12 cases)
          <br />
          <input type="radio" value="24" name="gender" /> Deux douzaines à
          cheval (24 cases)
          <br />
        </div>
        {this.getTypeMise}
      </React.Fragment>
    );
  }
}
