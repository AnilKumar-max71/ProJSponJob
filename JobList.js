import React from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs }) => {
  return (
    <div>
      <h3 className="mb-3">Job Tracker</h3>
      {jobs.length === 0 ? (
        <p>No jobs added yet.</p>
      ) : (
        jobs.map((job, idx) => <JobCard key={idx} job={job} />)
      )}
    </div>
  );
};

export default JobList;