import React from 'react';
import {
    SiFramer,
    SiJavascript,
    SiReactquery,
    SiRedux,
    SiStyledcomponents,
    SiFirebase,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";

import {
    FaCss3,
    FaGitAlt,
    FaHtml5,
    FaNode,
    FaReact,

} from "react-icons/fa6";

const Skills = () => {
    return (
        <div className='bg-black px-7 py-10'>
            <div>


                <div className='flex gap-2 text-2xl mb-2'>
                    <h2 className='text-complex'>Skills</h2>
                    <div className='text-main'>-----------------------</div>
                </div>
                <h2 className='text-complex mb-8'>Technologies I work with</h2>
            </div>

            <div className='flex gap-10 flex-wrap justify-center '>
                <div className='flex flex-col justify-center  items-center w-[9rem] py-4 border-[1px] border-main rounded-md'>
                    <FaHtml5 className='text-[#E44F26]' size={100} />
                    <h2 className='text-complex font-semibold'>HTML</h2>
                </div>

                <div className='flex flex-col justify-center  items-center w-[9rem] py-4 border-[1px] border-main'>
                    <FaCss3 className='text-[#1572B6]' size={100} />
                    <h2 className='text-complex font-semibold'>CSS</h2>
                </div>

                <div className='flex flex-col justify-center  items-center w-[9rem] py-4 border-[1px] border-main'>
                    <SiTailwindcss className='text-[#2298BD]' size={100} />
                    <h2 className='text-complex font-semibold'>Tailwind</h2>
                </div>

                <div className='flex flex-col justify-center  items-center gap-2 w-[9rem] py-4 border-[1px] border-main'>
                    <SiJavascript className='text-[#F5DE19]' size={100} />
                    <h2 className='text-complex font-semibold'>Javascript</h2>
                </div>

                <div className='flex flex-col justify-center gap-2 items-center w-[9rem] py-4 border-[1px] border-main'>
                    <SiTypescript className='text-[#3178c6]' size={100} />
                    <h2 className='text-complex font-semibold'>Typescript</h2>
                </div>

                <div className='flex flex-col justify-center  items-center w-[9rem] py-4 border-[1px] border-main'>
                    <FaReact className='text-[#00D8FF]' size={100} />
                    <h2 className='text-complex font-semibold'>React</h2>
                </div>

                <div className='flex flex-col justify-center  items-center w-[9rem] py-4 border-[1px] border-main'>
                    <SiRedux className='text-[#764ABC]' size={100} />
                    <h2 className='text-complex font-semibold'>Redux</h2>
                </div>

                <div className='flex flex-col justify-center  items-center w-[9rem] py-4 border-[1px] border-main'>
                    <SiReactquery className='text-[#764ABC]' size={100} />
                    <h2 className='text-complex font-semibold'>React Query</h2>
                </div>

                <div className='flex flex-col justify-center  items-center w-[9rem] py-4 border-[1px] border-main'>
                    <SiFirebase className='text-[#FFA000]' size={100} />
                    <h2 className='text-complex font-semibold'>Firebase</h2>
                </div>
            </div>
        </div>
    )
}

export default Skills
