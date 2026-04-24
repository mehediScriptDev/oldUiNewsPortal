import React from 'react';
import Navbar from '@/components/shared/Navbar';

const Authlayout = ({ children }) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};

export default Authlayout;