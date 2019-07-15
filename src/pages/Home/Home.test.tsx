import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import "../../test/setup";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { shallow } from "enzyme";

const wrapper = shallow(
  <Router>
    <Home />
  </Router>
);

describe("Home", () => {
  it("can be exported correctly", () => {
    expect(wrapper).toBeDefined();
  });
});
