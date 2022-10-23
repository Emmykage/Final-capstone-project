import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../components/nav/Navigation';

const MainLayout = ({ children }) => (
  <div className="container">
    <Navigation />
    <div className="content">
      {children}
    </div>
  </div>

);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MainLayout;
