import React, { useContext } from 'react';
import { Redirect } from '@reach/router'; //Redirect doesn't work
import { UserContext } from '../App';

const Content = () => {
  const [user] = useContext(UserContext);
  if (!user.accesstoken) return <Redirect from="" to="login" noThrow />;
  return <p className="home-title">Welcome to logging in using JWT tokens.</p>;
};

export default Content;
