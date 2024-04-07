import React, { useState } from 'react';
import { TfiEmail } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

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

        emailjs
            .sendForm('service_z5am25v', 'template_ig1s7e6', form.current, {
                publicKey: 'PYkMRr6CtbRm9AmEb',
            })
            .then(
                () => {
                    alert('Message sent successfully');
                },
                (error) => {
                    alert('Message not sent, pls try again later', error.text);
                },
            );

        setFormData({
            username: '',
            email: '',
            message: ''
        });

        event.target.reset();
    };

    return (
        <div className='bg-black px-8  py-12'>
            <div>
                <div className='flex gap-2 text-2xl mb-8' id='contact'>
                    <h2 className='text-complex'>Contact</h2>
                    <div className='text-main'>-------------------</div>
                </div>


            </div>

            <div className='grid gap-12 lg:grid-cols-2'>
                <div>
                    <div className='text-complex mb-20'>
                        <h2 className='mb-10 leading-7'>Do you have any ideas you would love to bring to life? Reach out, I would love to walk this journey with you. I am open to building projects and Technical Writing opportunities. You can also pitch me your Open-Source Projects</h2>
                    </div>

                    <div className='text-white flex gap-5 flex-col justify-center items-center'>
                        <div className='border-[1px] flex flex-col items-center gap-1 bg-[#3B7141] hover:bg-transparent rounded-md w-full lg:w-[18rem]  border-main text-center py-4'>
                            <MdEmail size={25} />
                            <h2>Email</h2>
                            <h2> <a href='' >zaynarb96@gmail.com</a> </h2>

                            <a href=''>
                                <h2 className='text-[#5bff29] hover:text-complex font-semibold'>Send me a message</h2>
                            </a>

                        </div>

                        <div className='border-[1px] flex flex-col items-center gap-1 bg-[#3B7141] hover:bg-transparent rounded lg:w-[18rem] w-full border-main text-center py-4'>
                            <FaTwitter size={25} />
                            <h2>Twitter</h2>
                            <h2> <a href='' >zainabibraheem_</a> </h2>

                            <a href='https://twitter.com/zainabibraheem_' target='_blank'>
                                <h2 className='text-[#5bff29] hover:text-white font-semibold'>Send me a message</h2>
                            </a>
                        </div>
                    </div>

                </div>


                <div className=''>
                    <form ref={form} onSubmit={handleSubmit} className='flex flex-col gap-10'>
                        <input
                            placeholder='Name'
                            className='w-full border bg-transparent border-main focus:outline-none focus:border-blue-500 text-complex rounded-md px-4 py-[7px]'
                            id='user-name'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <input
                            placeholder='Email'
                            className='w-full bg-transparent border border-main focus:outline-none focus:border-blue-500 text-complex rounded-md px-4 py-[7px]'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <textarea
                            placeholder='Message'
                            className='w-full bg-transparent border border-main focus:outline-none focus:border-blue-500 text-complex rounded-md px-4 py-[7px]'
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
