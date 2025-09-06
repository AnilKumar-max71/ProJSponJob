import React from "react";

const CVViewer = ({ cv }) => (
  <div className="mb-4">
    <h3>CV Preview</h3>
    <iframe src={cv} width="100%" height="500px" title="CV Preview"></iframe>
    <a href={cv} download className="btn btn-primary mt-2">Download CV</a>
  </div>
);

export default CVViewer;