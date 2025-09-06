import React, { useState } from "react";
import JobList from "./components/JobList";
import CVUpload from "./components/CVUpload";
import CVViewer from "./components/CVViewer";
import SponsorshipCheck from "./components/SponsorshipCheck";
import CVScore from "./components/CVScore";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedCV, setSelectedCV] = useState(null);

  const addJob = (job) => setJobs([...jobs, job]);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">ProJSponJob</h1>
      <SponsorshipCheck addJob={addJob} />
      <JobList jobs={jobs} />
      <CVUpload setSelectedCV={setSelectedCV} />
      {selectedCV && <CVViewer cv={selectedCV} />}
      {selectedCV && <CVScore cv={selectedCV} />}
    </div>
  );
}

export default App;