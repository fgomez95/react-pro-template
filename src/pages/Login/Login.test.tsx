import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import Login from "./Login";
import "../../test/setup";

interface Event {
  target: {
    name: string;
    value: string;
  };
}

const wrapper = mount(
  <Router>
    <Login />
  </Router>
);

describe("Login", () => {
  it("can be mounted", () => {
    expect(wrapper.find(Login)).toHaveLength(1);
  });
  it("sould update the username state on input change", () => {
    const event: Event = {
      target: {
        name: "username",
        value: "john"
      }
    };
    const input = wrapper.find(".form-username");
    input.simulate("change", event);
    expect(wrapper.find(Login).state().username).toEqual("john");
  });
  it("should update the password state on input change", () => {
    const event: Event = {
      target: {
        name: "password",
        value: "secret"
      }
    };
    const input = wrapper.find(".form-password");
    input.simulate("change", event);
    expect(wrapper.find(Login).state().password).toEqual("secret");
  });
});
