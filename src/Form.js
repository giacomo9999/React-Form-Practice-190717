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

  handleChange = e => {
    const { varName, value } = e.target;
    this.setState({ [varName]: value });
  };

  render() {
    const { name, species, color } = this.state;

    return (
      <div>
        <h2>I Am The Form</h2>
        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <label>Species</label>
          <input
            type="text"
            name="species"
            value={species}
            onChange={this.handleChange}
          />
          <label>Color</label>
          <input
            type="text"
            name="color"
            value={color}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Form;
