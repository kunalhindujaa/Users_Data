import React from "react";

const DisplayDetails = props => {
  return (
    <div>
      <h1 className="header"> Registration Details </h1>
      <div class="register-details">
        <p> Name : {props.location.state.name}</p>
        <br />
        <p> Contact Number : {props.location.state.phone}</p>
        <br />
        <p> Gender : {props.location.state.gender}</p>
        <br />
        <p>
          {" "}
          Previously registered for the course :{" "}
          {props.location.state.registered}{" "}
        </p>
        <br />
        <p> Course : {props.location.state.listItem}</p>
      </div>
    </div>
  );
};

export default DisplayDetails;
