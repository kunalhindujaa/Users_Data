import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Home from "./components/Home";
import Survey from "./components/Survey";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayDetails from "./components/DisplayDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />

          <Route path="/welcome" component={Welcome} />

          <Route path="/home" component={Home} />

          <Route path="/survey-form" component={Survey} />

          <Route
            path="/display-details"
            exact
            strict
            render={props => <DisplayDetails {...props} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
