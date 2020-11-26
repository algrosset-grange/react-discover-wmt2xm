import React from "react";
export { PieceRepeat };

class PieceRepeat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prob: 0,
      firstValue: 50,
      secondValue: 50,
      nbEpreuve: 1
    };
    this.ajust = this.ajust.bind(this);
  }

  getCoefficientBinomial(nbEpreuve, nbSucces)
  {
    if (nbEpreuve == 0 || nbSucces == 0 || nbSucces == nbEpreuve)
      return (1);
    if (nbSucces == 1 || nbSucces == nbEpreuve - 1)
      return (nbEpreuve);
    return (getCoefficientBinomial(nbEpreuve - 1, nbSucces - 1) + getCoefficientBinomial(nbEpreuve - 1, nbSucces));
  }

  LoiPascal(nbEpreuve, nbSucces, probaSucces)
  {
    return (getCoefficientBinomial(nbEpreuve, nbSucces) * Math.pow(probaSucces, nbSucces) * Math.pow(1 - probaSucces, nbEpreuve - nbSucces) );
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
        Face : {100 - this.state.firstValue}
        </div>

        <div>
          nombre d'essais : <input
            type="number"
            min="0"
            id="nb-serie"
            value={this.state.nbEpreuve}
            onChange={}
          />
        </div>
        <div>
        chance pour obtenir 
          de chance réussir à obtenir le premier événement : {1} loi de Pascal répétition{1 > 1 && 's'}
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
