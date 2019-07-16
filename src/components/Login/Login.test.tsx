import React from "react";
import Login from "./Login";
import "../../test/setup";
import { BrowserRouter as Router} from "react-router-dom";
import { mount } from "enzyme";

const wrapper = mount(
  <Router>
    <Login />
  </Router>
);

describe("Navigation", () => {
  it("renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });
});
