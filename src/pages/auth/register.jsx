import React from 'react';
import { Link } from "react-router-dom";
import ApiClient from '../../services/ApiClient';

const RegisterScreen = (props) => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      if (name && password) {
        const response = await  ApiClient.registerUser({name, password});
        if (response && response.status === 200) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          props.history.push("/");
        } else {
          setError({message: "Invalid credentials"});
        }
      } else{
        setError({message: "Please enter both your name and password"});
      }
    } catch (error) {
      setError({message: "Invalid credentials"});
    }
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center form-desc">
          Already registered?{" "}
            <span className="link-primary">
             <Link to="/auth/login"> Sign in</Link>
            </span>
          </div>
          {
            error && <div className="alert alert-danger">{error.message}</div>
          }

          <div className="form-group ">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              onChange={(e) => setName(e.target.value)}
            />
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
              onChange={(e) => setPassword(e.target.value)}
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
export default RegisterScreen;