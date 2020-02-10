import React, { Component } from "react";

class DisplayDetails extends Component {
  state = {
    name: this.props.location.state.name,
    phone: this.props.location.state.phone,
    listItem: this.props.location.state.listItem,
    gender: this.props.location.state.gender,
    registered: this.props.location.state.registered
  };
  render() {
    return (
      <div>
        <h1 className="header"> Registration Details </h1>
        <div class="register-details">
          <p> Name : {this.state.name}</p>
          <br />
          <p> Contact Number : {this.state.phone}</p>
          <br />
          <p> Gender : {this.state.gender}</p>
          <br />
          <p>
            {" "}
            Previously registered for the course : {this.state.registered}{" "}
          </p>
          <br />
          <p> Course : {this.state.listItem}</p>
        </div>
      </div>
    );
  }
}

export default DisplayDetails;
