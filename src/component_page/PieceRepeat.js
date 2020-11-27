import React from "react";
export { PieceRepeat };

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

  getCoefficientBinomial(nbEpreuve, nbSucces)
  {
    if (nbEpreuve == 0 || nbSucces == 0 || nbSucces == nbEpreuve)
      return (1);
    if (nbSucces == 1 || nbSucces == nbEpreuve - 1)
      return (nbEpreuve);
    return (this.getCoefficientBinomial(nbEpreuve - 1, nbSucces - 1) + this.getCoefficientBinomial(nbEpreuve - 1, nbSucces));
  }

  loiBinomial(nbEpreuve, nbSucces, probaSucces)
  {
    return (this.getCoefficientBinomial(nbEpreuve, nbSucces) * Math.pow(probaSucces, nbSucces) * Math.pow(1 - probaSucces, nbEpreuve - nbSucces) );
  }

  loiGeometrique(probaSucces, nbEchec)
  {
    return (probaSucces * Math.pow(1-probaSucces, nbEchec));
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
          /> %
        </div>
        <div>
        Face : {100 - this.state.pileValue} %
        </div>

        <div>
          nombre d'essais : <input
            type="number"
            min="0"
            id="nb-experience-input"
            value={this.state.nbEpreuve}
           onChange={this.ajust}
          />
        </div>

        <div>
        Remarque : En moyenne, vous obtenez au moins 1 pile en {1/(this.state.pileValue/100)} tentatives
        </div>
        <div>
          Probabilité d'obtenir un pile après <input
            type="number"
            min="0"
            id="nb-echec-input"
            value={this.state.nbEchec}
            onChange={this.ajust}
          /> faces : {this.loiGeometrique(this.state.pileValue/100, this.state.nbEchec)}
          
          
          <br />
          chance d'obtenir  de <input
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
