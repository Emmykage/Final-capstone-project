import React from 'react';
import { Link } from "react-router-dom";

const ForgotPasswordScreen = (props) => {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Forgot Password</h3>
          <div className="text-center form-desc">
            Remembered Password?{" "}
            <span className="link-primary">
             <Link to="/auth/login"> Sign in</Link>
            </span>
          </div>
          <div className="form-group ">
            <label>Account Email address</label>
            <input
              type="email"
              className="form-control "
              placeholder="Enter email"
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
export default ForgotPasswordScreen;