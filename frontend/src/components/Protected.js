import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../App';

const Protected = () => {
  const [user] = useContext(UserContext);
  // const [content, setContent] = useState('You need to login');

  useEffect(() => {
    async function fetchProtected() {
      const result = await (
        await fetch('http://localhost:4000/protected', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${user.accesstoken}`
          }
        })
      ).json();
      console.log('user: ', user);
      console.log('result: ', result);
      // if (user.accesstoken !== null) {
      //   setContent('Protected data');
      // }
    }
    fetchProtected();
  }, [user]);

  return <div>{user.accesstoken ? 'protected data' : 'log in to view'}</div>;
};

export default Protected;
