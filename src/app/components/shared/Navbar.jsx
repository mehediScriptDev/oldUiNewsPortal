import logo from '@/app/assets/logo.png';
import Image from 'next/image';
import { compareAsc, format } from "date-fns";

const Navbar = () => {
    return (
        <div className='py-6 space-y-3'>
            <Image className='mx-auto' src={logo} alt="Logo" width={300} height={200} />
            <p className='text-center text-[#706F6F] text-xl'>Journalism Without Fear or Favour</p>
            <p className='text-center font-medium text-xl'>Date: {format(new Date(), "eee, LLLL, dd yyyy")}</p>
        </div>
    );
};

export default Navbar;