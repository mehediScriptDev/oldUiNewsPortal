"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const Navlink = ({ children, href }) => {
    const pathname = usePathname();
    return (
        <div>
            <Link className={pathname===href? "border-b-2 border-[#D72050]" : ""} href={href}>{children}</Link>
        </div>
    );
};

export default Navlink;