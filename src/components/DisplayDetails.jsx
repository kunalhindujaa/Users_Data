import React from "react";

const DisplayDetails = props => {
  return (
    <div>
      <h1 className="header"> Registration Details </h1>
      <div className="detail-table">
        <table className="displayTable">
          <tr>
            <td> Name : </td>
            <td> {props.location.state.name} </td>
          </tr>
          <tr>
            <td> Contact No : </td>
            <td> {props.location.state.phone} </td>
          </tr>
          <tr>
            <td> Gender : </td>
            <td> {props.location.state.gender} </td>
          </tr>
          <tr>
            <td> Course Name : </td>
            <td> {props.location.state.listItem} </td>
          </tr>
          <tr>
            <td> Previously registered for the course : </td>
            <td> {props.location.state.registered} </td>
          </tr>
        </table>
      </div>

      {/* <div class="register-details">
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
      </div> */}
    </div>
  );
};

export default DisplayDetails;
