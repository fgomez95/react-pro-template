import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation";
import "../../../test/setup";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { mount } from "enzyme";

const wrapper = mount(
  <Router>
    <Navigation />
  </Router>
);

describe("Navigation", () => {
  it("renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });
  it("should render 3 navigation links", () => {
    expect(wrapper.find(Link)).toHaveLength(3)
  });
});
