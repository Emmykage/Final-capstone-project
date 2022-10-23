import React from 'react';
import Navigation from '../components/nav/Navigation';
export default function MainLayout({children}) {

    return (
        <div className="container">
            <Navigation />
                {children}
        </div>

    )
}