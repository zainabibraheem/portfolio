import React from 'react'

const Card = ({ image, title, about, link }) => {
  return (
    <div className='w-80 border  border-main '>
      <div>
        <img className='' src={image} alt='' />
      </div>
      <div className=' text-complex p-2'>
        <h2 className='text-lg py-2 mb-1 text-main font-bold'>{title}</h2>
        <p className='text-sm mb-3'>{about}</p>
        <button className='text-complex hover:bg-main mb-1 text-sm font-bold border border-main p-2'>View Project</button>
      </div>
    </div>
  )
}

export default Card
