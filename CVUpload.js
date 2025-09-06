import React from "react";

const CVUpload = ({ setSelectedCV }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedCV(URL.createObjectURL(file));
    }
  };

  return (
    <div className="mb-4">
      <h3>Upload Your CV</h3>
      <input type="file" accept=".pdf,.docx" onChange={handleFileChange} />
    </div>
  );
};

export default CVUpload;