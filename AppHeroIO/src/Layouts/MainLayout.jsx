import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import { InstalledProvider } from '../context/InstalledContext';

const MainLayout = () => {
    return (
            <InstalledProvider>
                <div className='flex flex-col min-h-screen'>
                        <NavBar />
                        <div className="flex-1">
                             <Outlet  />
                        </div>
                        <Footer />
                </div>
            </InstalledProvider>
    );
};

export default MainLayout;