import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../components/nav/Navigation';

const  MainLayout = ({children})  =>{

    return (
        <div className="container">
            <Navigation />
                {children}
        </div>

    )
}

MainLayout.propTypes = {
    children: PropTypes.node,
}
export default MainLayout;