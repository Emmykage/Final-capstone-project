import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/nav/Navigation';

const MainLayout = ({ children }) => {
  const navigation = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigation('/splash_page');
    }
  }, []);
  return (
    <div className="container">
      <Navigation />
      <div className="content">{children}</div>
    </div>
  );
};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MainLayout;
