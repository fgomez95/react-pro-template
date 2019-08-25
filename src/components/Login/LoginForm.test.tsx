import React from "react";
import Login from "./LoginForm";
import "../../test/setup";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";
import { ILoginFormProps } from "./LoginForm";

let LoginPropsMock: ILoginFormProps = {
  username: "john",
  password: "secret",
  handleInputChange(event) {},
  handleFormSubmit(event) {}
};

const wrapper = mount(
  <Router>
    <Login {...LoginPropsMock} />
  </Router>
);

describe("LoginForm", () => {
  it("renders without crashing", () => {
    expect(wrapper.find(Login)).toHaveLength(1);
  });
  it("renders username and password inputs", () => {
    expect(wrapper.find("input")).toHaveLength(3);
  });
  it("reners the value of the prop username", () => {
    expect(wrapper.find(".form-username").props().value).toEqual("john");
  });
  it("reners the value of the prop password", () => {
    expect(wrapper.find(".form-password").props().value).toEqual("secret");
  });
});
