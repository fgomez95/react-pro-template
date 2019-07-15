import * as React from "react";
import { Route } from "react-router-dom";
import Login from "./Login/Login";
import Navigation from "../components/UI/Navigation/Navigation";

export interface MainProps {
  message: string;
}
const main = (props: MainProps): JSX.Element => {
  return (
    <div>
      <h2 className="main-message">{props.message}</h2>
      <Navigation />
      <Route exact path="/" render={() => <Login />} />
    </div>
  );
};

export default main;
