import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <NavBar />
            <div className="flex-1">
               <Outlet  />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;