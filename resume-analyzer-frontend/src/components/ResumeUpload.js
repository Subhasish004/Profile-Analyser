import React, { useState } from 'react';
import axios from 'axios';

const ResumeUpload = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file!");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:8080/api/resume/upload", formData);
      setMessage("Resume uploaded successfully!");
      onUploadSuccess(res.data);
    } catch (error) {
      setMessage("Upload failed!");
      console.error(error);
    }
  };

  return (
    <div className="upload-box">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Resume</button>
      <p>{message}</p>
    </div>
  );
};

export default ResumeUpload;
