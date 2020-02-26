import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Home from "./components/Home";
import Survey from "./components/Survey";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DisplayDetails from "./components/DisplayDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />

          <Route exact path="/welcome" component={Welcome} />

          <Route exact path="/home" component={Home} />

          <Route exact path="/survey-form" component={Survey} />

          <Route
            path="/display-details"
            exact
            render={props => <DisplayDetails {...props} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
