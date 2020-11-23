import React from "react";
import { Header_Part } from "../Header_Part.js";
import { Footer_Part } from "../Footer_Part.js";
export { Proba };

class Proba extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
    );
  }
}
