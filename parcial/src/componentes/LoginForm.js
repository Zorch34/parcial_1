import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login: username, password }),
    });

    if (response.ok) {
      navigate('/robots');
    } else {
      setError('Error de autenticación. Revise sus credenciales');
    }
  };

  return (
    <div className="login-container">
      <h1>
        <FormattedMessage id="header" />
      </h1>
      <img src="/images/robots.jpg" alt="Robot" className="robot-image" />
      <h2>
        <FormattedMessage id="loginTitle" />
      </h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="username">
            <FormattedMessage id="username" />
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">
            <FormattedMessage id="password" />
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="button-container">
          <button type="submit" className="action-button1">
            <FormattedMessage id="loginButton" />
          </button>
          <button
            type="button"
            className="action-button2"
            onClick={() => {
              setUsername('');
              setPassword('');
            }}
          >
            <FormattedMessage id="cancelButton" />
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </form>
      <p className="footer-text">
        <FormattedMessage id="contact" />
      </p>
    </div>
  );
};

export default LoginForm;
