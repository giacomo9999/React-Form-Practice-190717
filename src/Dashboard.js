import React, { Component } from "react";
import Form from "./Form";

class Dashboard extends Component {
  state = {
    formOpen: false,
    dinosaurs: [
      { id: 1, name: "Emily", species: "Stegosaurus", color: "mauve" },
      { id: 2, name: "Sergei", species: "Velociraptor", color: "orange" },
      { id: 3, name: "Ofeibia", species: "Triceratops", color: "teal" }
    ]
  };

  handleUpdate() {
    console.log("Updating...");
  }

  handleAdd() {
    console.log("Adding new dinosaur...");
  }

  openForm() {
    console.log("opening form...");
    console.log(this.state);
    this.setState({ formOpen: true });
  }

  renderForm() {
    if (this.state.formOpen) {
      return <Form />;
    }
  }

  render() {
    return (
      <div className="container">
        <h2>I Am The Dashboard</h2>
        <div className="roster">
          <ul>
            {this.state.dinosaurs.map(entry => (
              <li key={entry.id}>
                {`${entry.name} • ${entry.species} • ${entry.color}`}
                <button onClick={e => this.openForm(e)}>Edit</button>
              </li>
            ))}
          </ul>
        </div>
        {this.renderForm()}
        <button onClick={e => this.openForm(e)}>Add New Dinosaur</button>
      </div>
    );
  }
}

export default Dashboard;
