import React from 'react'

const Hero = () => {
  return (
    <div className='bg-black h-[400px] text-complex flex flex-col justify-center items-center gap-6'>
      <h2 className='text-2xl'>Hello</h2>
      <h2 className='text-2xl'>I am Zainab, a Frontend Developer </h2>

      <div className='flex gap-4'>
        <a href='' >
            <button className='text-primary text-md py-2 px-4 hover:bg-main hover:text-black border-main border-[1px]'>Download My Cv</button>
        </a>

        <a href='' >
            <button className='text-primary text-md py-2 px-4 border-main hover:bg-main hover:text-black border-[1px]'>Contact Me</button>
        </a>
      </div>
    </div>
  )
}

export default Hero
