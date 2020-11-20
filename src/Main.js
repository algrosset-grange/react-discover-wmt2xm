import React from "react";
import { Boddy_Home } from "./Page/Home/Boddy_Home.js";
import Boddy_About from "./Page/About/Boddy_About.js";
import { Type_Probability } from "./Page/Type_Probability/Type_Probability_Home.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { path: window.location.pathname, page: <Boddy_Home /> };
    this.changePath = this.changePath.bind(this);
  }

  changePath(newPath) {
    //this.setState({ path: window.location.pathname });
  }
  /*switch (newPath) {
      case "/":
        this.setState({
          page: <Boddy_Home />
        });
      case "/about":
        this.setState({
          page: <About />
        });
      default:
        this.setState({
          page: <Boddy_Home />
        });
    }*/

  home() {
    return <Boddy_Home />;
  }

  about() {
    return <Boddy_About />;
  }

  typeProba() {
    return <Type_Probability />;
  }

  render() {
    return (
      <React.Fragment>
        {this.state.path}
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/type_probability">Type de probabilité</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about">{this.about()}</Route>
            <Route path="/type_probability">{this.typeProba()} </Route>
            <Route path="/">{this.home()}</Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
    /*return (
      this.state.page
    )*/
  }
}

/*
function Home() {
  return <Boddy_Home />
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}*/

/*
export default function App_navigation() {
  return (
    <Router>
      {window.location.href}
      <br/>
      {window.location.pathname}
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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. }
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
}
*/

/*2nd Example: Nested Routing
This example shows how nested routing works. The route /topics loads the Topics component, which renders any further <Route>'s conditionally on the paths :id value.import React from "react";*/

/*
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected * /}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
*/
