import React from "react";
import { Header_Part } from "../Header_Part.js";
import { Footer_Part } from "../Footer_Part.js";
export { Boddy_Home };
import App_navigation from "../Nav-Bar.js";

const aaa = "here is a constant out of the class";
const nav = { App_navigation };

class Boddy_Home extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { name: 'Frarthur' };
    //this.changeName = this.changeName.bind(this);
  }

  ///<Header />

  render() {
    return (
      <React.Fragment>
        <Header_Part />
        <br />
        {aaa}
        <br />
        <App_navigation />
        <br />
        the Boddy_Homes
        <br />
        <br />
        <Footer_Part />
      </React.Fragment>
    );
  }
}
