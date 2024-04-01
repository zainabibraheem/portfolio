import React from 'react'

const About = () => {
    return (
        <div className='bg-black px-7'>
            <div className='flex gap-2 text-2xl mb-8'>
                <h2 className='text-complex'>About me</h2>
                <div className='text-main'>-----------------------</div>
            </div>

            <div className='grid lg:grid-cols-2'>
                <div className='text-complex flex flex-col gap-6 '>
                    <p>Hey there! i'm Zainab, a frontend developer with a keen eye for design. I love building quality, virtually appealing web applications using javacritp and its frasmeworks. I am very passionate about building user friendly interfaces. I write clean, functional code and also love collaborating with colleagues to achieve project success. </p>
                    <p>I also write informative articles on various technical topics, educating users and fellow developers with my blog post. </p>
                    <p>If you're looking for a passionate Frontend Developer and Technical Writer to bring your ideas to life, i'm your girl.</p>
                    <a href='' >
                        <button className='text-primary text-md py-2 px-4 border-main hover:bg-[#FFDB58] hover:text-black border-[1px]'>Contact Me</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
