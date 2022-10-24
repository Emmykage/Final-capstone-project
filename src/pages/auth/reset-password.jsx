import React from 'react';
import { Link } from "react-router-dom";

const LoginScreen = (props) => {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Password Reset</h3>
          <div className="text-center form-desc">
            Create account password?{" "}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group">
            <label>Confirm password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
            />
          </div>
          <div className="submissions">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default LoginScreen;