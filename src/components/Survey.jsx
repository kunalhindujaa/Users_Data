import React, { Component } from "react";

class Survey extends Component {
  state = {
    name: "",
    phone: "",
    listItem: "React",
    gender: "",
    check1: "No",
    check2: "No",
    registered: "No"
  };

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleClick = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // handleName = event => {
  //   this.setState({ name: event.target.value });
  // };

  // handlePhone = event => {
  //   this.setState({ phone: event.target.value });
  // };

  // handleListChange = event => {
  //   this.setState({ listItem: event.target.value });
  // };

  // handleRadioChange = event => {
  //   this.setState({ gender: event.target.value });
  // };

  handleReset = event => {
    this.setState({ name: "" });
    this.setState({ phone: "" });
    this.setState({ listItem: "React" });
    this.setState({ gender: "" });
    this.setState({ registered: "No" });
    event.preventDefault();
  };

  // handleCheckBoxChange = event => {
  //   this.setState({ registered: event.target.value });
  // };

  handleSubmit = () => {
    return this.props.history.push({
      pathname: "/display-details",
      state: { ...this.state }
    });
    // console.log("Name:"+this.state.name);
    ///event.preventDefault();
  };

  render() {
    return (
      <div className="survey">
        <h1 className="header"> User Survey Form </h1>
        <form>
          <label>Name </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Contact Number </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your number"
            length="10"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label> Gender </label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={this.handleChange}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={this.handleChange}
          />{" "}
          Female
          <br />
          <br />
          <label>Course </label>
          <select
            value={this.listItem}
            name="listItem"
            onChange={this.handleChange}
          >
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
          <br />
          <br />
          <label> Have you previously registered for the course? </label>
          <input
            type="checkbox"
            onClick={this.handleClick}
            name="check1"
            value="Yes"
          />
          Yes
          <input
            type="checkbox"
            onClick={this.handleClick}
            name="check2"
            value="No"
          />
          No
          <br />
          <br />
          <button className="surveyButton" onClick={this.handleSubmit}>
            Submit
          </button>
          <button className="surveyButton" onClick={this.handleReset}>
            Reset
          </button>
        </form>
      </div>
    );
  }
}

export default Survey;
