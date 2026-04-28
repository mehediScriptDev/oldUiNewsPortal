import React from 'react';
import Navbar from '@/app/components/shared/Navbar';
import Footer from '@/app/components/shared/Footer';
import BreakingNews from '@/app/components/shared/BreakingNews';
import Header from '@/app/components/shared/Header';

const Mainlayout = ({ children }) => {
    return (
        <div>
            <Navbar/>
            <BreakingNews/>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Mainlayout;