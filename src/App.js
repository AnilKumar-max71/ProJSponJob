import React, { useState } from 'react';
import AdminLogin from './AdminLogin';
import './App.css';

// Check if we're in admin-only mode
const isAdminMode = process.env.REACT_APP_ADMIN_SECRET && process.env.REACT_APP_ADMIN_SECRET !== '';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!isAdminMode);

  if (isAdminMode && !isAuthenticated) {
    return (
      <div className="App">
        <header className="App-header">
          <AdminLogin onAuth={setIsAuthenticated} />
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ProJSponJob</h1>
        <p>Sponsorship Job Search Community Tool</p>
        <p>Welcome to your job search companion!</p>
        {isAdminMode && (
          <p style={{ color: '#4CAF50', fontSize: '14px' }}>
            ✓ Admin authenticated
          </p>
        )}
      </header>
      <main className="App-main">
        <p>
          This application helps job seekers track applications, 
          create tailored CVs and cover letters, and find sponsorship opportunities.
        </p>
        <div className="features">
          <div className="feature-card">
            <h3>Job Tracker</h3>
            <p>Track job applications, statuses, and deadlines</p>
          </div>
          <div className="feature-card">
            <h3>CV/CL Generation</h3>
            <p>Generate customized CVs and cover letters</p>
          </div>
          <div className="feature-card">
            <h3>Sponsorship Check</h3>
            <p>Find jobs that offer sponsorship opportunities</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;