import React from 'react';
import { Link } from '@reach/router';

const Navigation = ({ logOutCallback }) => (
  <div className="log-in-link">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/protected">Protected</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <button onClick={logOutCallback}>Log Out</button>
      </li>
    </ul>
  </div>
);

export default Navigation;
