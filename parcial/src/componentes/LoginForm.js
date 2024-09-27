import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      <h1>Adopta un Robot con Robot Lovers!</h1>
      <img src="/images/robots.jpg" alt="Robot" className="robot-image" />
      <h2>Inicio de sesión</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="username">Nombre de usuario</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="button-container">
          <button type="submit" className="action-button1">Ingresar</button>
          <button type="button" className="action-button2" onClick={() => { setUsername(''); setPassword(''); }}>Cancelar</button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </form>
      <p className="footer-text">Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
    </div>
  );
};

export default LoginForm;
