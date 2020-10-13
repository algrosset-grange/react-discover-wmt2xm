import React from "react";
import {Header_Part} from "../Header_Part.js";
import {Footer_Part} from "../Footer_Part.js";
import App_navigation from "../Nav-Bar.js"

export default class Boddy_About extends React.Component{

  constructor(props) {
    super(props);
    //this.state = { name: 'Frarthur' };
    //this.changeName = this.changeName.bind(this);
  }

  render() {
    return (
    <React.Fragment>
      <Header_Part />
      <br/>
      {aaa}
      <br/>
      <br/>
      Boddy_About
      <br/>
      <br/>
      <Footer_Part />
    </React.Fragment>
  );
  }

}