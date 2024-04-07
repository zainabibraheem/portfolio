import React from 'react';
import avatar from '../assets/avatar.png'

const About = () => {
    return (
        <div className='bg-black px-7 lg:px-9 pb-12 ' id='about'>
            <div className='flex gap-2 text-2xl mb-6'>
                <h2 className='text-complex'>About me</h2>
                <div className='text-main'>---------------</div>
            </div>

            <h2 className='text-complex mb-3 text-2xl font-bold'>Who am I?</h2>

            <div className=' flex flex-col lg:flex-row gap-10 '>
                <div className='text-complex leading-7 flex flex-col gap-6 mt-3 lg:gap-10 lg:w-3/5'>
                    <p>Hey there! i'm Zainab, a frontend developer with a keen eye for design. I love building quality, virtually appealing web applications using javacritp and its frasmeworks. I am very passionate about building user friendly interfaces. I write clean, functional code and also love collaborating with colleagues to achieve project success. </p>
                    <p>I also write informative articles on various technical topics, educating users and fellow developers with my blog post. </p>
                    <p>If you're looking for a passionate Frontend Developer and Technical Writer to bring your ideas to life, i'm your girl.</p>
                    <a href='#contact' >
                        <button className='text-primary text-md py-2 px-4 border-main hover:bg-main hover:text-black border-[1px]'>Contact Me</button>
                    </a>
                </div>

                <div className=' flex justify-center lg:justify-end lg:ml-[120px]'>
                    <img className='h-[350px] ' src={avatar} alt='avatar'/>
                </div>
            </div>
        </div>
    )
}

export default About
