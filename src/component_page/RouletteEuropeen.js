import React from "react";
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
          La roulette européenne est composé de 37 cases de 0 à 36
          La table présente égallement 3 couleurs : vert rouge et noir
          Seul le  est vert, les 36 autres cases sont répartie équitablement (noté que tous les nombres pair ne sont pas rouge.)
        </div>
        <div>
        Il y a donc une case sur 36 (1/36) de tomber sur le bon numéro<br />
        18/37 en misant pair (0 non inclus), impair, noir ou rouge<br />
        </div>

      </React.Fragment>
    );
  }
}
