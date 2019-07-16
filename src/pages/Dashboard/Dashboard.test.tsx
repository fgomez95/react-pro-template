import React from "react";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import "../../test/setup";

const wrapper = mount(
  <Router>
    <Dashboard />
  </Router>
);

describe("Dashboard", () => {
  it("can be mounted", () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.find(Dashboard)).toHaveLength(1);
  });
});
