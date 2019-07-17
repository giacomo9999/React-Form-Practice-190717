import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      name: "",
      species: "",
      color: ""
    };
    this.state = this.initialState;
  }
  render() {
    return <h2>I Am The Form</h2>;
  }
}

export default Form;
