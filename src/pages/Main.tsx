import * as React from "react";
import { Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Dash from "./Dash/Dash";
import Navigation from "../components/UI/Navigation/Navigation";

export interface MainProps {
  message: string;
}
const main = (props: MainProps): JSX.Element => {
  return (
    <div>
      <h1 className="main-message">{props.message}</h1>
      <Navigation />
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/dashboard" render={() => <Dashboard />} />
    </div>
  );
};

export default main;
