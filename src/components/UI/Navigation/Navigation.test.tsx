import React from "react";
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
  it("should render 2 navigation links", () => {
    expect(wrapper.find(Link)).toHaveLength(2)
  });
});
