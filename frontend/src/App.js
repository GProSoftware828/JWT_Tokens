import React, { useState, useEffect } from 'react';
import { Router, navigate } from '@reach/router';

import Navigation from './components/Navigation';
import Content from './components/Content';
import Login from './components/Login';
import Protected from './components/Protected';
import Register from './components/Register';
import Home from './components/Home';

export const UserContext = React.createContext([]);

function LoginApp() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const logOutCallback = async () => {
    await fetch('http://localhost:4000/logout', {
      method: 'POST',
      credentials: 'include'
    });
    //clear user from context
    setUser({});
    //Navigate back to start page
    navigate('/');
  };

  useEffect(() => {
    async function checkRefreshToken() {
      const result = await (
        await fetch('http://localhost:4000/refresh_token', {
          method: 'POST',
          credentials: 'include', //needed to include the cookie
          headers: {
            'Content-Type': 'application/json'
          }
        })
      ).json();
      setUser({
        accesstoken: result.accesstoken
      });
      setLoading(false);
    }
    checkRefreshToken();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div>
        <Navigation logOutCallback={logOutCallback} />
        <Router id="/router">
          <Login path="/login" />
          <Register path="/register" />
          <Content path="/content" />
          <Protected path="/protected" />
          <Home path="/" />
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default LoginApp;
