import * as React from "react";
import { Link } from "react-router-dom";
function Navigation(): JSX.Element {
  return (
    <div>
      <h3>Navigation</h3>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
