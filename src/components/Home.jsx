import React, { Component } from "react";
import axios from "axios";
import Detail from "./Detail";

class Home extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      const users = response.data.splice(0, 5);
      this.setState({ users: users });
      //console.log(response);
    });
  }
  render() {
    const users = this.state.users.map(user => {
      return (
        <Detail
          key={user.id}
          userName={user.name}
          emailId={user.email}
          website={user.website}
        />
      );
    });

    return (
      <div>
        <p className="header"> User's data </p>
        {users}
      </div>
    );
  }
}

export default Home;
