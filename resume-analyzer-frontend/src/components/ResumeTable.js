import React from 'react';

const ResumeTable = ({ resumes }) => {
  return (
    <table border="1" style={{ marginTop: "20px" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Skills</th>
        </tr>
      </thead>
      <tbody>
        {resumes.map((res, index) => (
          <tr key={index}>
            <td>{res.name}</td>
            <td>{res.email}</td>
            <td>{res.phone}</td>
            <td>{res.skills}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResumeTable;
