import React from "react";
import {Header} from "../Header.js";
export {Boddy_Home};


const aaa = "bbbb";

class Boddy_Home extends React.Component{

  constructor(props) {
    super(props);
    //this.state = { name: 'Frarthur' };
    //this.changeName = this.changeName.bind(this);
  }

    ///<Header />

  render() {
    return (
    <React.Fragment>
      aaaa
      <Header />
      {aaa} <br/>
      Boddy_Home
    </React.Fragment>
  );
  }

}
