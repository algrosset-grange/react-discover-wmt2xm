import React from "react";
//import { PropTypes } from "react";
//import { Boddy_Home } from "./Home/boddy_Home.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/* A <Switch> looks through its children <Route>s and
renders the first one that matches the current URL. */

/*export default function App_navigation() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}*/

export default class App_navigation extends React.Component {
  constructor(props) {
    super(props);
    this.home = this.home.bind(this);
    this.about = this.about.bind(this);
    this.users = this.users.bind(this);
  }

  home() {
    return this.props.propsChangePage("/");
  }

  about() {
    return this.props.propsChangePage("/about");
  }

  users() {
    return "ccc";
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            {this.props.path != "/about" && (
              <Route path="/about">{this.about()}</Route>
            )}
            {this.props.path != "/users" && (
              <Route path="/users">{this.users()}</Route>
            )}
            {this.props.path != "/" && <Route path="/">{this.home()}</Route>}
          </Switch>
        </div>
      </Router>
    );
  }
}
