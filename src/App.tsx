import * as React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { AppState } from "./store";
import Main from "./pages/Main";
import { thunkLogin } from "./store/session/thunks";
import { Session } from "./store/session/types";

interface AppProps {
  thunkLogin: any;
  session: Session;
}

class App extends React.Component<AppProps> {
  render() {
    return (
      <Router>
        <Main {...this.props} />
      </Router>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  session: state.session
});
export default connect(
  mapStateToProps,
  { thunkLogin }
)(App);
