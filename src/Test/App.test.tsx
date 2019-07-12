import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import "./setup";
import { shallow, mount, render } from "enzyme";

const wrapper = shallow(<App />);

describe("application", () => {
  it("renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });
  it("renders Hello, World message", () => {
    expect(wrapper.text()).toEqual("Hello, World")
  })
});
