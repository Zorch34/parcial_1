import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';  // Importamos el archivo CSS

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Credenciales correctas
    if (username === 'admin' && password === 'pass') {
      navigate('/robots');  // Redirigir al listado de robots
    } else {
      setError('Credenciales incorrectas');
    }
  };

  const handleCancel = () => {
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div className="login-container">
      <h1>Adopta un Robot con Robot Lovers!</h1>
      <img src="/images/robots.jpg" alt="Robot" className="robot-image" />
      <h2>Inicio de sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-container"> {/* Div para alinear botones */}
          <button type="submit">Ingresar</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <footer className="footer">
        <p>Contact Us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </div>
  );
};

export default LoginForm;