import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import Login from "./Login";
import "../../test/setup";

const wrapper = mount(
  <Router>
    <Login />
  </Router>
);

describe("Login", () => {
  it("can be mounted", () => {
    expect(wrapper.find(Login)).toHaveLength(1);
  });
});
