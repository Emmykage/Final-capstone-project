import React from 'react';
import { Link } from "react-router-dom";
import ApiClient from '../../services/ApiClient';

const LoginScreen = (props) => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && password) {
      const response = await  ApiClient.loginUser({name, password});
      if (response && response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        props.history.push("/");
      }
    }
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center form-desc">
            Not yet registered?{" "}
            <span className="link-primary">
             <Link to="/auth/register"> Sign up</Link>
            </span>
          </div>
          <div className="form-group ">
            <label>Email address</label>
            <input
              type="email"
              className="form-control "
              placeholder="Enter email"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="submissions">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-center ">
            Forgot <Link  to ='/auth/forgot-password'>password?</Link>
          </p>
        </div>
      </form>
    </div>
  )
}
export default LoginScreen;