import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";


const Navbar = () => {

    const [navOPen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOPen);
    };

    const closeNav = () => {
        setNavOpen(false);
    };

    return (
        <nav className='bg-black fixed w-full '>
            <div className='hidden px-12 py-6 lg:flex justify-between items-center'>
                <div>
                    <h2 className='text-complex text-xl font-semibold'>ZAINAB.</h2>
                </div>
                <div>
                    <ul className=' flex gap-12'>
                        <li className='text-complex hover:text-main'> <a href=''>About me</a></li>
                        <li className='text-complex hover:text-main'> <a href=''>Skills</a></li>
                        <li className='text-complex hover:text-main'>  <a href=''>Projects</a></li>
                        <li className='text-complex hover:text-main'> <a href='' > Blog</a></li>
                        <li className='text-complex hover:text-main'> <a href='' > Contact </a></li>
                    </ul>
                </div>
            </div>

            <div className='flex px-6 py-6 justify-between items-center lg:hidden'>
                <div>
                    <h2 className='text-complex text-xl font-semibold'>ZAINAB.</h2>
                </div>
                <div onClick={toggleNav} className='hover:text-complex font-bold text-white'>
                    {navOPen ? <MdOutlineClose size={28} /> : <RxHamburgerMenu size={25} />}
                </div>

                {navOPen &&
                    <div className='fixed pb-2  w-screen top-[70px] left-0 bg-black'>
                        <ul className=' flex text-lg flex-col '>
                            <li className='text-complex px-6 py-3 hover:text-main'> <a href=''>About me</a></li>
                            <li className='text-complex px-6 py-3 hover:text-main'> <a href=''>Skills</a></li>
                            <li className='text-complex px-6 py-3 hover:text-main'>  <a href=''>Projects</a></li>
                            <li className='text-complex px-6 py-3 hover:text-main'> <a href='' > Blog</a></li>
                            <li className='text-complex px-6 py-3 hover:text-main'> <a href='' > Contact </a></li>
                        </ul>
                    </div>}
            </div>
        </nav>
    )
}

export default Navbar
