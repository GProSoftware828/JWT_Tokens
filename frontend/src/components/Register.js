import React, { useState } from 'react';
import { navigate } from '@reach/router';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    const result = await (
      await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })
    ).json();

    if (!result.error) {
      console.log(result.message);
      navigate('/');
    } else {
      console.log(result.error);
    }
  };

  const handleChange = e => {
    if (e.currentTarget.name === 'email') {
      setEmail(e.currentTarget.value);
    } else {
      setPassword(e.currentTarget.value);
    }
  };

  return (
    <div className="login-input">
      <form onSubmit={handleSubmit}>
        <h2 className="register-title">Register</h2>
        <input
          className="register-email"
          value={email}
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Email"
          autoComplete="email"
        />
        <input
          className="register-password"
          type="password"
          value={password}
          onChange={handleChange}
          name="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        <button className="register-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
