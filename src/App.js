import React from "react";
import "./style.css";
export {App};
import {otherStyle} from './Style.js'

/*
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '/' };
    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Child onChange={this.changeName} />
        <Sibling name={this.state.name} />
      </div>
    );
  }
});
*/

const darkBlue = 'rgb(059, 089, 152)';
const white = 'rgb(255, 255, 255)';

const styles = {
  darkBlue: darkBlue,
  white: white
};

let divStyle = {
  backgroundColor: styles.darkBlue,
  color: styles.white
};

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = { name: 'Frarthur' };
    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
    <React.Fragment>
      <div style={divStyle}>
        <h1>Hello StackBlitz!!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
      <div style={otherStyle}>
        okay !
      </div>
    </React.Fragment>
  );
  }
}
