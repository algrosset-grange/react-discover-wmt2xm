import React from "react";
import { Header_Part } from "../component_page/Header_Part.js";
import { Footer_Part } from "../component_page/Footer_Part.js";
export { Boddy_Home };

const aaa = "here is a constant out of the class";
//const nav = { App_navigation };

class Boddy_Home extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { name: 'Frarthur' };
    //this.changeName = this.changeName.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  changePage(e) {
    this.props.propsChangePath(e);
  }
  ///<Header />

  render() {
    return (
      <React.Fragment>
        <Header_Part />
        <br />
        {aaa}
        <br />
        {/*<App_navigation
          propsChangePage={this.changePage}
          actualPath={this.props.path}
        />*/}
        <br />
        the Boddy_Homes
        <br />
        <br />
        <Footer_Part />
      </React.Fragment>
    );
  }
}
