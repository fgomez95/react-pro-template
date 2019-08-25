import * as React from "react";
import { Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Navigation from "../components/UI/Navigation/Navigation";
const main = (): JSX.Element => {
  return (
    <div>
      <Navigation />
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/dashboard" render={() => <Dashboard />} />
    </div>
  );
};

export default main;
