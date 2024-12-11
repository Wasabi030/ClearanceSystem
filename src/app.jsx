import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginInterface from "./components/LogInInterface";
import Dashboard from "./components/Dashboard";
import ClearanceStatus from "./components/ClearanceStatus";
import AboutUDM from "./components/AboutUDM";
import ApplyForRecon from "./components/ApplyForRecon";
import Message from "./components/Message";
import Inquiry from "./components/Inquiry";
import Guidance from "./components/Guidance";
import AboutUs from "./components/AboutUs";
import "./app.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>UDM Admission Clearance</h1>
        </header>
        <nav>
          <ul>
            <li><a href="#about-udm">About UDM</a></li>
            <li><a href="#apply-for-recon">Apply for Recon</a></li>
            <li><a href="#message">Message</a></li>
          </ul>
        </nav>
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<LoginInterface />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clearance-status" element={<ClearanceStatus />} />

          {/* Additional sections/components */}
          <Route
            path="/about"
            element={
              <div>
                <section id="about-udm">
                  <AboutUDM />
                </section>
                <section id="apply-for-recon">
                  <ApplyForRecon />
                </section>
                <section id="message">
                  <Message />
                </section>
              </div>
            }
          />
        </Routes>
        {/* Footer or additional content */}
        <main>
          <Inquiry />
          <Guidance />
          <AboutUs />
        </main>
      </div>
    </Router>
  );
};

export default App;
