import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
    return (
        <div id='contact' className='pt-32 container'>
            <div className='grid md:grid-cols-2 gap-16'>
                {/* Left Section */}
                <div className='space-y-8'>
                    <h2 className='text-5xl font-bold' data-aos="zoom-in-up">Get in Touch</h2>
                    <p className='text-gray-400 text-lg leading-relaxed' data-aos="zoom-in-up">
                        Drop me a line, give me a call, or send me a message by submitting the form below.
                    </p>
                    <div className='flex items-center gap-4 text-gray-400' data-aos="zoom-in-up">
                        <AiOutlineMail size={30} /> 
                        <span className='text-lg'>flirtwithcode@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-4 text-gray-400' data-aos="zoom-in-up">
                        <BsFillTelephoneFill size={30} /> 
                        <span className='text-lg'>(+92) 310-2499391</span>
                    </div>
                </div>

                {/* Right Section */}
                <div className='space-y-6'>
                    <div className='flex flex-col gap-2 text-lg' data-aos="zoom-in-up">
                        <label htmlFor="name" className='font-medium'>Name</label>
                        <input
                            type="text"
                            className='h-[40px] bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-accent px-3'
                            id='name'
                            placeholder='Your Name'
                        />
                    </div>
                    <div className='flex flex-col gap-2 text-lg' data-aos="zoom-in-up">
                        <label htmlFor="email" className='font-medium'>Email</label>
                        <input
                            type="email"
                            className='h-[40px] bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-accent px-3'
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div className='flex flex-col gap-2 text-lg' data-aos="zoom-in-up">
                        <label htmlFor="msg" className='font-medium'>Message</label>
                        <textarea
                            className='bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-accent px-3 py-2 resize-none'
                            id='msg'
                            rows={6}
                            placeholder='Your Message'
                        />
                    </div>
                    <button
                        className='bg-accent text-white py-2 px-8 rounded-md hover:bg-accent-dark transition duration-300'
                        data-aos="zoom-in-up"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
