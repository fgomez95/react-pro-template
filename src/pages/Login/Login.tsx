import * as React from "react";
import LoginForm from "../../components/Login/LoginForm";

interface LoginState {
  username: string;
  password: string;
}

interface LoginProps {
  asyncLogin: any;
}

class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    username: "",
    password: ""
  };
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value }: { name: string; value: string } = event.target;
    this.setState({
      [name]: value
    } as Pick<LoginState, keyof LoginState>);
  };
  handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.asyncLogin(this.state.username, this.state.password);
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
