/*
Use this component as a redux and 
react router wire
*/

// Lib Import 
import * as React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router} from "react-router-dom";

//Redux Import
import { AppState } from "./store/index";

// Component Import 
import Main from "./pages/Main";

interface AppProps {}

class App extends React.Component {
  render() {
    return(
      <Router>
        <Main 
          message={"hello"}
        />
      </Router>
    )
  }
}

const mapStateToProps = (state: AppState) => ({});
export default connect(mapStateToProps)(App);
