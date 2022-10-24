import React from 'react';
import { Link } from "react-router-dom";

const RegisterScreen = (props) => {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center form-desc">
          Already registered?{" "}
            <span className="link-primary">
             <Link to="/auth/login"> Sign in</Link>
            </span>
          </div>
          <div className="form-group ">
            <label>Email address</label>
            <input
              type="email"
              className="form-control "
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="submissions">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right ">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}
export default RegisterScreen;