import React from 'react';
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/users/users';

const RegisterScreen = () => {
  const dispatch = useDispatch()
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    setError(null);
    dispatch(registerUser({user: {name, password}}))
    navigate('/auth/login')
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
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              value={name}
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
              value={password}
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