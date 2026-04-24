import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

const Mainlayout = ({ children }) => {
    return (
        <div>
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Mainlayout;