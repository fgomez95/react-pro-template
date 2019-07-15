import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import { MainProps } from "./Main";

import "../test/setup";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { mount } from "enzyme";

const wrapper = mount(
  <Router>
    <Main message="hello, world" />
  </Router>
);

describe("main", () => {
  it("renders without crashing", () => {
    expect(wrapper.find(Main)).toHaveLength(1);
    expect(wrapper.find(".main-message").text()).toEqual("hello, world");
  });
});
