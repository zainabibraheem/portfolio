import React, { useState } from 'react';
import { TfiEmail } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

const Contact = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: ''

    })

    function handleChange(event) {
        const { name, value } = event.target
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData({});
        alert('Your message has been sent to our team, we will get back to you via your email');
        console.log(formData);
    }

    return (
        <div className='bg-black px-8  py-12'>
            <div>
                <div className='flex gap-2 text-2xl mb-8'>
                    <h2 className='text-complex'>Contact</h2>
                    <div className='text-main'>-------------------</div>
                </div>

                <div className='text-complex'>
                    <h2 className='mb-10'>I am open to building projects and Technical Writing opportunities. You can also pitch me your Open-Source Project</h2>
                </div>
            </div>

            <div className='grid gap-12 lg:grid-cols-2'>

                <div className='text-white flex gap-5 flex-col justify-center items-center'>
                    <div className='border-[1px] flex flex-col items-center gap-1 bg-[#3B7141] rounded-md w-full lg:w-[18rem]  border-main text-center py-4'>
                        <MdEmail size={25}/>
                        <h2>Email</h2>
                        <h2> <a href='' >zaynarb96@gmail.com</a> </h2>
                        <h2 className='text-main font-bold'>Send me a message</h2>
                    </div>

                    <div className='border-[1px] flex flex-col items-center gap-1 bg-[#3B7141] rounded lg:w-[18rem] w-full border-main text-center py-4'>
                        <FaTwitter size={25} />
                        <h2>Twitter</h2>
                        <h2> <a href='' >zainabibraheem_</a> </h2>
                        <h2>Send me a message</h2>
                    </div>
                </div>

                <div className=''>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
                        <input
                            placeholder='Name'
                            className='w-full border bg-transparent border-main focus:outline-none focus:border-blue-500 rounded-md px-4 py-[7px]'
                            id='user-name'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <input
                            placeholder='Email'
                            className='w-full bg-transparent border border-main focus:outline-none focus:border-blue-500 rounded-md px-4 py-[7px]'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <textarea
                            placeholder='Message'
                            className='w-full bg-transparent border border-main focus:outline-none focus:border-blue-500 rounded-md px-4 py-[7px]'
                            id='message'
                            rows='8'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>

                        <button className='w-[5rem] border-[1px] border-main hover:bg-main text-complex p-2 text-lg hover:scale-110 font-semibold'
                            onClick={handleSubmit}
                        >Send</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact
