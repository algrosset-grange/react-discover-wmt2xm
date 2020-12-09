import React from "react";
import arrondis from "./arrondis.js";
export { RouletteEuropeen };

class RouletteEuropeen extends React.Component {
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
      <React.Fragment>
        <div>
          La roulette européenne est composé de 37 cases de 0 à 36 La table
          présente égallement 3 couleurs : vert rouge et noir Seul le est vert,
          les 36 autres cases sont répartie équitablement (noté que tous les
          nombres pair ne sont pas rouge.)
        </div>
        <div>
          Il y a donc une case sur 36 (1/36) de tomber sur le bon numéro, on
          remporte 35 fois la mise
          <br />
          18/37 en misant pair (0 non inclus), impair, noir ou rouge, on
          remporte 1 fois la mise.
          <br />
          <br />
          <ul>
            Mise sur un numéro (plein) → 35 fois la mise. (1 chance sur 36) soit{" "}
            {arrondis((1 / 36) * 100)}%
          </ul>
          <ul>
            Mise sur deux numéros (cheval : exemple : 7-10) → 17 fois la mise.
            (2 chance sur 36) soit {arrondis((2 / 36) * 100)}%
          </ul>
          <ul>
            Mise sur trois numéros (transversale dite aussi « transversale
            pleine » : exemple : 7-8-9) → 11 fois la mise.{" "}
            {arrondis((3 / 36) * 100)}%
          </ul>
          <ul>
            Mise sur quatre numéros (carré : exemple : 25-26-28-29) → 8 fois la
            mise. {arrondis((4 / 36) * 100)}%
          </ul>
          <ul>
            Mise sur six numéros (sixain dit aussi « transversale simple » :
            exemple : 13-14-15-16-17-18) → 5 fois la mise.{" "}
            {arrondis((6 / 36) * 100)}%
          </ul>
          <ul>
            Mise sur douze numéros (douzaine ou colonne : exemple : colonne 1-34
            ou douzaine 1-12) → 2 fois la mise. {arrondis((12 / 36) * 100)}%
          </ul>
          <ul>
            Mise sur une chance simple, soit dix-huit numéros (Noir-Rouge -
            Pair-Impair - Manque-Passe) → 1 fois la mise.{" "}
            {arrondis((1 / 36) * 100)}%
          </ul>
          <ul>
            Mise sur vingt-quatre numéros (deux colonnes adjacentes,
            vingt-quatre premiers (1-24) ou vingt-quatre derniers (13-36), ces
            mises étant placées à cheval sur les colonnes ou les douzaines) → la
            moitié de la mise {arrondis((24 / 36) * 100)}%
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
