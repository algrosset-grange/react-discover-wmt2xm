import React from "react";
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
  Home() {
    return "aaa";
  }

  About() {
    return "bbb";
  }

  Users() {
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
            <Route path="/about">{this.About()}</Route>
            <Route path="/users">{this.Users()}</Route>
            <Route path="/">{this.Home()}</Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
