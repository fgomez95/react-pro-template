import * as React from "react";
import LoginForm from "../../components/Login/LoginForm";

interface ILoginState {
  username: string;
  password: string;
}

class Login extends React.Component<{}, ILoginState> {
  state: ILoginState = {
    username: "",
    password: ""
  };
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value }: { name: string; value: string } = event.target;
    this.setState({
      [name]: value
    } as Pick<ILoginState, keyof ILoginState>);
  };
  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("form submitted");
  };
  render() {
    return (
      <div>
        <h4>Login</h4>
        <LoginForm
          username={this.state.username}
          password={this.state.password}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
      </div>
    );
  }
}

export default Login;
