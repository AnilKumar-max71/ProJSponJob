import React, { useState } from "react";

const CVScore = ({ cv }) => {
  const [score, setScore] = useState(85);

  return (
    <div className="mb-4">
      <h3>CV Match Score</h3>
      <p>Your CV is currently <strong>{score}%</strong> relevant to this job.</p>
    </div>
  );
};

export default CVScore;