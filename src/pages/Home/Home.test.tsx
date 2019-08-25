import React from "react";
import Home from "./Home";
import "../../test/setup";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
const wrapper = mount(
  <Router>
    <Home />
  </Router>
);

describe("Home", () => {
  it("can be exported correctly", () => {
    expect(wrapper.find(Home)).toHaveLength(1);
  });
});
