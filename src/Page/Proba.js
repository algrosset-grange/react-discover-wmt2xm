import React from "react";
import { Header_Part } from "../Header_Part.js";
import { Footer_Part } from "../Footer_Part.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export { Proba };

class Proba extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prob: 0,
      firstValue: 50,
      secondValue: 50
    };
    this.ajust = this.ajust.bind(this);
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

  piece() {
    return (
      <div>
        <label for="proba-first-event-input">Premier event: </label>
        <input
          type="number"
          min="0"
          max="100"
          id="proba-first-event-input"
          value={this.state.firstValue}
          onChange={this.ajust}
        />{" "}
        %
        <br />
        <label for="proba-second-event-input">Second event: </label>
        <input
          type="number"
          min="0"
          max="100"
          id="proba-second-event-input"
          value={this.state.secondValue}
          onChange={this.ajust}
        />{" "}
        %
      </div>
    );
  }

  mainProba() {
    return (
      <React.Fragment>
        {this.state.prob}
        <br />
        {window.location.pathname}
        <br />
      </React.Fragment>
    );
  }

  render() {
    return (
      <Router>
        <li>
          <Link to="/proba/piece">piece</Link>
        </li>
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
