import React from "react";
import { Header_Part } from "../Header_Part.js";
import { Footer_Part } from "../Footer_Part.js";
import App_navigation from "../Nav-Bar.js";

const aaa = "here is a constant out of the class in about";

export default class Boddy_About extends React.Component {
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this);
  }

  changePage(e) {
    this.props.propsChangePath(e);
  }

  render() {
    return (
      <React.Fragment>
        <Header_Part />
        <br />
        {aaa}
        <br />
        <App_navigation propsChangePage={this.changePage} />
        <br />
        Boddy_About
        <br />
        <br />
        <Footer_Part />
      </React.Fragment>
    );
  }
}
