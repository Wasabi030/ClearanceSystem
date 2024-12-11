import React from "react";
import { Link } from "react-router-dom";

const ClearanceStatus = () => {
  const departments = [
    { department: "University Clinic", status: "Pending", remarks: "", dateCleared: "" },
    { department: "Office of Student Affairs", status: "Pending", remarks: "", dateCleared: "" },
    { department: "University Librarian", status: "Cleared", remarks: "No issues", dateCleared: "12/01/2024" },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h2>Clearance Status</h2>
        <table>
          <thead>
            <tr>
              <th>Department</th>
              <th>Status</th>
              <th>Remarks</th>
              <th>Date Cleared</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((row, index) => (
              <tr key={index}>
                <td>{row.department}</td>
                <td>{row.status}</td>
                <td>{row.remarks}</td>
                <td>{row.dateCleared}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/clearance-status">Clearance Status</Link></li>
        <li><a href="#">About UDM</a></li>
        <li><a href="#">Messages</a></li>
      </ul>
    </div>
  );
};

export default ClearanceStatus;
