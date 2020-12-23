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
    this.onChangeTypeMise = this.onChangeTypeMise.bind(this);
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
      sommeActuel: 0,
      typeMise: "0"
    });
  }

  ajust(e) {
    if (e.target.id == "sommeAjouter") {
      this.setState({});
    }
  }

  onChangeTypeMise(event) {
    this.setState({
      typeMise: event.target.value
    });
  }

  loadTypeMise() {
    switch (this.state.typeMise) {
      case "1":
        return (
          <div>
            <input type="number" id="valeurmise-1" />
          </div>
        );
      case "2":
        return (
          <div>
            <input type="number" id="valeurmise-1" />
            <input type="number" id="valeurmisé-2" />
          </div>
        );
      case "3":
        return (
          <div>
            <input type="number" id="valeurmise-1" />
            <input type="number" id="valeurmise-2" />
            <input type="number" id="valeurmise-3" />
          </div>
        );
      case "6":
        return (
          <div>
            <input type="number" id="valeurmise-sixtain-1" /> serie 1-6
            <input type="number" id="valeurmise-sixtain-2" /> serie 7-12
            <input type="number" id="valeurmise-sixtain-3" /> serie 13-18
            <input type="number" id="valeurmise-sixtain-4" /> serie 19-24
            <input type="number" id="valeurmise-sixtain-5" /> serie 25-30
            <input type="number" id="valeurmise-sixtain-6" /> serie 31-36
          </div>
        );
      case "12":
        return (
          <div>
            <input type="number" id="valeurmise-douzaine-1" /> serie 1-12
            <input type="number" id="valeurmise-douzaine-2" /> serie 13-24
            <input type="number" id="valeurmise-douzaine-3" /> serie 25-36
          </div>
        );
      case "18":
        return (
          <div>
            <input type="number" id="valeurmise-simple-pair" /> pair
            <input type="number" id="valeurmise-simple-impair" /> impair
            <input type="number" id="valeurmise-douzaine-rouge" /> rouge
            <input type="number" id="valeurmise-douzaine-noir" /> noir
          </div>
        );
      case "24":
        return (
          <div>
            <input type="number" id="valeurmise-ddouzaine-1" /> 1-24
            <input type="number" id="valeurmise-ddouzaine-2" /> 13-36
          </div>
        );
      default:
        return;
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
          <input type="radio" value="18" name="gender" /> chance simple (18
          cases)
          <br />
          <input type="radio" value="24" name="gender" /> Deux douzaines à
          cheval (24 cases)
          <br />
        </div>
        {this.state.typeMise}
      </React.Fragment>
    );
  }
}
