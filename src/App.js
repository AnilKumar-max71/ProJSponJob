import React, { useState } from 'react';
import './App.css';
import AdminLogin from './AdminLogin';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>ProJSponJob</h1>
          <p>Sponsorship Job Search Community Tool</p>
          <AdminLogin onAuth={setIsAuthenticated} />
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ProJSponJob Dashboard</h1>
        <p>Welcome to your job search dashboard!</p>
        <button onClick={() => setIsAuthenticated(false)}>Logout</button>
      </header>
    </div>
  );
}

export default App;