
import './App.css';
import React, { useState } from 'react';
import ResumeUpload from './components/ResumeUpload';
import ResumeTable from './components/ResumeTable';

function App() {
  const [resumes, setResumes] = useState([]);

  const addResume = (newResume) => {
    setResumes((prev) => [...prev, newResume]);
  };

  return (
    <div className="App">
      <h2>Resume Analyzer</h2>
      <ResumeUpload onUploadSuccess={addResume} />
      <ResumeTable resumes={resumes} />
    </div>
  );
}

export default App;

