import React from 'react';
import { Link } from '@reach/router';
import '../App.css';

const Navigation = ({ logOutCallback }) => (
  <div className="nav-styles">
    <Link className="nav-items" to="/">
      Home
    </Link>
    <Link className="nav-items" to="/protected">
      Website Content
    </Link>
    <Link className="nav-items" to="/register">
      Register
    </Link>
    <button className="nav-items" onClick={logOutCallback}>
      Log Out
    </button>
  </div>
);

export default Navigation;
