import React from 'react';
import { projectData } from '../data';
import Card from './card';

const Projects = () => {
    return (
        <div className='bg-black px-7 lg:px-9 py-10 ' id='projects'>
            <div className='flex gap-2 text-2xl mb-8 mt-4'>
                <h2 className='text-complex'>Projects</h2>
                <div className='text-main'>---------------</div>
            </div>
            <h2 className='text-complex leading-7 text-md lg:w-1/2'>Over time, As I've progressed in my journey of learning and mastering frontend tools and frameworks, I've built several projects to exhibit my skills.</h2>
            <div className='bg-black gap-10 grid justify-items-center md:grid-cols-2 lg:grid-cols-3 py-10 px-[auto]'>
                {projectData.map((project) => {
                    const { id, image, title, about, link } = project
                    return (
                        <div key={id}>
                            <Card
                                id={id}
                                image={image}
                                title={title}
                                about={about}
                                link={link}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects
