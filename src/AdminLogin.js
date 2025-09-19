import React, { useState } from 'react';
import './AdminLogin.css';

const ADMIN_SECRET = process.env.REACT_APP_ADMIN_SECRET;

export default function AdminLogin({ onAuth }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!password.trim()) {
      setError('Please enter a password');
      return;
    }
    if (password === ADMIN_SECRET) {
      onAuth(true);
      setError(null);
    } else {
      setError('Invalid admin password');
    }
  };

  return (
    <div className="admin-login-container">
      <form onSubmit={handleLogin} className="admin-login-form">
        <h2>Admin Access Required</h2>
        <p>This application is currently in admin-only mode.</p>
        <div className="input-group">
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="admin-input"
            required
          />
          <button type="submit" className="admin-button">
            Login
          </button>
        </div>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
}