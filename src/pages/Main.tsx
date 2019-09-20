import * as React from "react";
import { Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Navigation from "../components/UI/Navigation/Navigation";
import { Session } from "../store/session/types";

export interface MainProps {
  thunkLogin?: any;
  session?: Session;
}

const main = (props: MainProps): JSX.Element => {
  return (
    <div>
      <Navigation />
      <Route exact path="/" render={() => <Home />} />
      <Route
        exact
        path="/login"
        render={() => <Login asyncLogin={props.thunkLogin} />}
      />
    </div>
  );
};

export default main;
