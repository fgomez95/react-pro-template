import * as React from "react";
import { Link } from "react-router-dom";
function Navigation(): JSX.Element {
  return (
    <aside>
      <h2>Navigation</h2>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navigation;
