import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import '../ CSS/Header.css';



class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const path = this.props.location.pathname.slice(1);
    
    return (
      <div>
        <h1>{path}</h1>
      </div>
    );
  }
}

export default withRouter(Header);
