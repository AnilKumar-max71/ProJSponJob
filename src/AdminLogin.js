import React, { useState } from 'react';

const ADMIN_SECRET = process.env.REACT_APP_ADMIN_SECRET;

export default function AdminLogin({ onAuth }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_SECRET) {
      onAuth(true);
    } else {
      setError('Invalid admin password');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Admin Login</h2>
      <input
        type="password"
        placeholder="Enter admin password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      {error && <div style={{color: "red"}}>{error}</div>}
    </form>
  );
}