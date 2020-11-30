import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export { Proba };
import { Piece } from "../component_page/Piece.js";
import { PieceRepeat } from "../component_page/PieceRepeat.js";
import { RouletteEuropeen } from "../component_page/RouletteEuropeen.js";

class Proba extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <li>
          <Link to="/proba/piece">piece</Link>
        </li>
        <li>
          <Link to="/proba/piece-repeat">piece lancé plusieurs fois</Link>
        </li>
        <li>
          <Link to="/proba/roulette-europeenne">Roulette européenne</Link>
        </li>
        <br />
        <Switch>
          <Route path="/proba/piece">{<Piece />}</Route>
          <Route path="/proba/piece-repeat">{<PieceRepeat />}</Route>
          <Route path="/proba/roulette-europeenne">
            {<RouletteEuropeen />}
          </Route>
        </Switch>
      </Router>
    );
  }
}

/*
    <React.Fragment>
      <Header_Part />
        <br />
        <h1>proba de la pièce</h1>
        <br />
        <div>
          <label for="proba-first-event-input">Premier event: </label>
          <input id="proba-first-event-input" />
        </div>
        <br />
        <div>a</div>
        <br />
      <Footer_Part />
    </React.Fragment>
  */
