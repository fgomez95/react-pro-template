import React from "react";
import Main from "./Main";
import "../test/setup";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import Navigation from "../components/UI/Navigation/Navigation";

const wrapper = mount(
  <Router>
    <Main />
  </Router>
);

describe("main", () => {
  it("renders without crashing", () => {
    expect(wrapper.find(Main)).toHaveLength(1);
  });
  it("should render the navigation menu", () => {
    expect(wrapper.find(Navigation)).toHaveLength(1);
  });
});
