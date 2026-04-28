
import Image from 'next/image';
import avatar from '@/app/assets/user.png'
import Navlink from '@/app/components/shared/Navlink';

const Header = () => {
    return (
        <div className='flex justify-between items-center max-w-7xl mx-auto mt-3'>
            <div>

            </div>
            <div>
                <ul className='flex items-center gap-2'>
                    <li><Navlink href="/">Home</Navlink></li>
                    <li><Navlink href="/about">About</Navlink></li>
                    <li><Navlink href="/career">Career</Navlink></li>
                </ul>
            </div>
            <div className='flex items-end gap-1.5'>
                <Image src={avatar} alt="Avatar" height={40} width={40}/>
                <button className='bg-[#403F3F] btn text-white'>Login</button>
            </div>
        </div>
    );
};

export default Header;