import React, { useState } from "react";
import LockOpenIcon from "@material-ui/icons/LockOpen";
// import { Route } from "react-router-dom";
// import Welcome from "./Welcome";

function Login(props) {
  const name = "Kunal";
  const pass = "abc";
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleUserName(event) {
    setUserName(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  const [value, setValue] = useState(false);

  function handleClick() {
    if (userName === name && password === pass) {
      props.history.push("/welcome");
    } else {
      alert("Login UnSuccessful!!");
    }
  }

  return (
    <div>
      <h1 className="header">
        <LockOpenIcon /> Data By Bay
      </h1>
      <div className="form-div">
        <form className="login-form">
          <label className="login-label"> Username </label>
          <input
            type="text"
            placeholder="Enter your username"
            onChange={handleUserName}
          />
          <br />
          <br />
          <label className="login-label">Password </label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={handlePassword}
          />
          <br />
          <br />
          <button className="btn btn- custBtn" onClick={handleClick}>
            {" "}
            Login{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
