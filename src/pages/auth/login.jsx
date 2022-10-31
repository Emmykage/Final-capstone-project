import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/users/users';

const LoginScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleSubmit = async (e) => {
 
    e.preventDefault();
    dispatch(loginUser({name, password}))
    navigate('/')

  }

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
          {
            error && <div className="alert alert-danger">{error.message}</div>
          }
          <div className="form-group ">
            <label>User Name</label>
            <input
              type="text"
              className="form-control "
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
          <p className="forgot-password text-center ">
            Forgot <Link  to ='/auth/forgot-password'>password?</Link>
          </p>
        </div>
      </form>
    </div>
  )
}
export default LoginScreen;






