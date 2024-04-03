import React from 'react';
import { ReactTyped } from 'react-typed';
import Navbar from './navbar';

const Hero = () => {
  return (
    <div className='bg-black h-screen lg:h-[500px] text-complex flex flex-col justify-center items-center gap-6'>
      <Navbar />
      <h2 className='text-2xl'>Hello!</h2>
      <div className='flex items-end gap-2 text-lg md:text-2xl lg:text-3xl '>
        <h2 className=''>I am Zainab,  </h2>
        <ReactTyped
          strings={[
            'a Frontend Developer',
            'a Technical Writer'
          ]}
          typeSpeed={40}
          backSpeed={50}
          className='text-main font-semibold'
          loop
        />
      </div>

      <div className='flex gap-5 mt-2'>
        <a href='' >
          <button className='text-primary text-sm md:text-md md:py-4 md:px-5 py-3 px-4 hover:bg-main hover:text-black border-main border-[1px]'>Download My CV</button>
        </a>

        <a href='' >
          <button className='text-primary text-sm md:text-md md:py-4 md:px-5 py-3 px-4 border-main hover:bg-main hover:text-black border-[1px]'>Contact Me</button>
        </a>
      </div>
    </div>
  )
}

export default Hero
