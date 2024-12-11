import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h2>Dashboard</h2>
        <p>No exam result yet for your batch.</p>
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

export default Dashboard;
