import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../App';
import ToDoApp from '../src_todo/ToDoApp';

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
    }
    fetchProtected();
  }, [user]);

  return (
    <div>
      {user.accesstoken ? (
        <div>
          <p className="protected-title">Hello from Australia!</p>
          <div className="todo-position">
            <ToDoApp />
          </div>
        </div>
      ) : (
        'log in to view'
      )}
    </div>
  );
};

export default Protected;
