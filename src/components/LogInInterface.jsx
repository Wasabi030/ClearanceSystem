import React from "react";
import { useNavigate } from "react-router-dom";

const LoginInterface = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>UNIVERSIDAD DE MANILA ADMISSION CLEARANCE FOR FRESHMAN</h2>
        <form>
          <label>Username:</label>
          <input type="text" placeholder="Enter your username" />
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
          <button type="button" onClick={handleLogin}>Log In</button>
        </form>
        <div className="footer">
          <a href="/register">No Account Yet? Click Here to register.</a>
          <a href="/forgot-password">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginInterface;
