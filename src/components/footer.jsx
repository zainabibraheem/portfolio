import React from 'react';
import { FaGithub } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaTwitter, FaXTwitter } from "react-icons/fa6";
import { SiHashnode } from "react-icons/si";

const Footer = () => {
    return (
        <div className='bg-black text-complex px-8 lg:py-10 py-5 flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center'>
            <div className='flex flex-col gap-1'>
                <div className='mb-3'>
                    <h2 className='text-white text-xl'>Zainab.</h2>
                </div>
                <h2> Frontend Developer and Technical Writer </h2>
                <p>zaynarb96@gmail.com</p>
            </div>

            <div className='flex gap-4 mb-3'>
              <a href='https://github.com/zainabibraheem' > <FaGithub size={20}/> </a>
              <a href='https://www.linkedin.com/in/zainabibrahim-/' > <SlSocialLinkedin size={20}/> </a>
              <a href='https://zainabibrahim.hashnode.dev/' > <SiHashnode size={20}/> </a>
              <a href='https://twitter.com/zainabibraheem_'> <FaXTwitter size={20} /> </a>
            </div>
        </div>
    )
}

export default Footer
