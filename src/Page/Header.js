import React from 'react';
export {Header};

class Header extends React.Component{

  constructor(props) {
    super(props);
    //this.state = { name: 'Frarthur' };
    //this.changeName = this.changeName.bind(this);
  }

  /*changeName(newName) {
    this.setState({
      name: newName
    });
  }*/

  render() {
    return (
      <Header>
        <div>
          Here is header
        </div>
      </Header>
    );
  }
}
