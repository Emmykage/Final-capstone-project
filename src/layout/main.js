import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../components/nav/Navigation';
import { Navigate } from 'react-router-dom';

const MainLayout = ({ children }) => {
  // const navigate = useNavigate()
const {user} = useSelector((state) => state.user);
console.log(user)
  const isAuthenticated = user;
  
  
  return(
    <>
    {isAuthenticated ? (
      <>
  <div className="container">
    <Navigation />
    <div className="content">
    
      {children}
    </div>
  </div>
  </>
    ) : (
      <Navigate to='/' />
    )

}
  </>
)};
  
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MainLayout;
