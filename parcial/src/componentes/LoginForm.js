import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl'; // Importar FormattedMessage
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'pass') {
      navigate('/robots');
    } else {
      setError('Error de autenticación. Revise sus credenciales');
    }
  };

  return (
    <div className="login-container">
      <h1>
        <FormattedMessage id="header" /> {/* Usar FormattedMessage */}
      </h1>
      <img src="/images/robots.jpg" alt="Robot" className="robot-image" />
      <h2>
        <FormattedMessage id="loginTitle" /> {/* Usar FormattedMessage */}
      </h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="username">
            <FormattedMessage id="username" /> {/* Usar FormattedMessage */}
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
            <FormattedMessage id="password" /> {/* Usar FormattedMessage */}
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
            <FormattedMessage id="loginButton" /> {/* Usar FormattedMessage */}
          </button>
          <button
            type="button"
            className="action-button2"
            onClick={() => {
              setUsername('');
              setPassword('');
            }}
          >
            <FormattedMessage id="cancelButton" /> {/* Usar FormattedMessage */}
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </form>
      <p className="footer-text">
        <FormattedMessage id="contact" /> {/* Usar FormattedMessage */}
      </p>
    </div>
  );
};

export default LoginForm;
