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
        <nav className='bg-black top-0 fixed w-full '>
            <div className='hidden px-9 py-6 lg:flex justify-between items-center'>
                <div>
                    <h2 className='text-white text-2xl font-semibold'>ZAINAB.</h2>
                </div>
                <div>
                    <ul className=' flex gap-12'>
                        <li className='text-complex hover:text-main'> <a href='#about'>About me</a></li>
                        <li className='text-complex hover:text-main'> <a href='#skills'>Skills</a></li>
                        <li className='text-complex hover:text-main'>  <a href='#projects'>Projects</a></li>
                        <li className='text-complex hover:text-main'> <a href='' > Blog</a></li>
                        <li className='text-complex hover:text-main'> <a href='#contact' > Contact </a></li>
                    </ul>
                </div>
            </div>

            <div className='flex px-7 py-6 mt-2 justify-between items-center lg:hidden'>
                <div>
                    <h2 className='text-white text-2xl font-semibold'>ZAINAB</h2>
                </div>
                <div onClick={toggleNav} className='hover:text-complex font-bold text-white'>
                    {navOPen ? <MdOutlineClose size={28} /> : <RxHamburgerMenu size={25} />}
                </div>

                {navOPen &&
                    <div className='fixed pb-2  w-screen top-[70px] left-0 bg-black'>
                        <ul className=' flex text-lg flex-col '>
                            <li className='text-complex px-7 py-3 hover:text-main'> <a href='#about'>About me</a></li>
                            <li className='text-complex px-7 py-3 hover:text-main'> <a href='#skills'>Skills</a></li>
                            <li className='text-complex px-7 py-3 hover:text-main'>  <a href='#projects'>Projects</a></li>
                            <li className='text-complex px-7 py-3 hover:text-main'> <a href='' > Blog</a></li>
                            <li className='text-complex px-7 py-3 hover:text-main'> <a href='#contact' > Contact </a></li>
                        </ul>
                    </div>}
            </div>
        </nav>
    )
}

export default Navbar
