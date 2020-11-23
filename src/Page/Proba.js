import React from "react";
import { Header_Part } from "../Header_Part.js";
import { Footer_Part } from "../Footer_Part.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export { Proba };

class Proba extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prob: 0
    };
    this.plop = this.plop.bind(this);
  }

  plop(e) {
    e.preventDefault();
    window.location.pathname = "/proba/piece";
    this.setState({ prob: 1 });
    return;
  }

  piece() {
    return (
      <div>
        <label for="proba-first-event-input">Premier event: </label>
        <input id="proba-first-event-input" />
      </div>
    );
  }

  mainProba() {
    return (
      <React.Fragment>
        {this.state.prob}
        <br />
        <a href="/proba/piece" onClick={this.plop}>
          Piece
        </a>
      </React.Fragment>
    );
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/proba/piece">{this.piece()}</Route>
          <Route path="/proba">{this.mainProba()}</Route>
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
