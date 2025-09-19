import React, { useState } from 'react';

const CVManager = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleGenerateNew = () => {
    // Handle CV generation logic
    console.log('Generate new CV clicked');
  };

  return (
    <div className="cv-manager">
      <div className="cv-manager-header">
        <h1>CV/Cover Letter Manager</h1>
      </div>

      <div className="cv-actions">
        <div className="upload-section">
          <label htmlFor="cv-upload" className="upload-btn">
            Upload CV
          </label>
          <input
            type="file"
            id="cv-upload"
            multiple
            accept=".pdf,.doc,.docx"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
        </div>

        <button className="generate-btn" onClick={handleGenerateNew}>
          Generate New
        </button>
      </div>

      <div className="cv-history">
        <h2>CV/CL History</h2>
        {uploadedFiles.length > 0 ? (
          <div className="file-list">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="file-item">
                <span className="file-name">{file.name}</span>
                <div className="file-actions">
                  <button className="view-btn">View</button>
                  <button className="download-btn">Download</button>
                </div>
                <div className="file-chips">
                  <span className="ats-score-chip">ATS Score: 85%</span>
                  <span className="ai-detection-chip">AI Detection: Low</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No files uploaded yet</p>
        )}
      </div>
    </div>
  );
};

export default CVManager;