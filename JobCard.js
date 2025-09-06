import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5>{job.title}</h5>
        <p>{job.company} - {job.location}</p>
        <p>Status: {job.status}</p>
        <a href={job.url} target="_blank" rel="noreferrer">View Job</a>
      </div>
    </div>
  );
};

export default JobCard;