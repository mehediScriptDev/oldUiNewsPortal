import React from 'react';
import Navbar from '@/app/components/shared/Navbar';
import Footer from '@/app/components/shared/Footer';

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