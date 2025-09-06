import React, { useState } from "react";

const SponsorshipCheck = ({ addJob }) => {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("");

  const handleAddJob = () => {
    const job = {
      title: "Sample Job",
      company: "Company Inc",
      location: "London, UK",
      status: "Applied",
      url: url
    };
    addJob(job);
    setStatus("Job added successfully!");
  };

  return (
    <div className="mb-4">
      <h3>Add a Job</h3>
      <input
        type="text"
        placeholder="Paste job URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="form-control mb-2"
      />
      <button onClick={handleAddJob} className="btn btn-success">Add Job</button>
      {status && <p className="mt-2">{status}</p>}
    </div>
  );
};

export default SponsorshipCheck;