import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Job Tracker Dashboard</h1>
        <button className="add-job-btn">Add Job</button>
      </div>
      
      <div className="dashboard-content">
        <div className="job-tracker-table">
          <table>
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Company</th>
                <th>Sponsorship</th>
                <th>Status</th>
                <th>Deadline</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6">No jobs added yet</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="progress-panel">
          <h2>Progress</h2>
          <div className="progress-stats">
            <div className="stat">
              <label>Weekly Applications:</label>
              <span>0</span>
            </div>
            <div className="stat">
              <label>Monthly Applications:</label>
              <span>0</span>
            </div>
            <div className="stat">
              <label>Response Rate:</label>
              <span>0%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;