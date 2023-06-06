import React from 'react';

const Contact = () => {
    return (
        <div className='mt-28 max-w-screen-lg mx-3 lg:mx-auto'>
            <h1 className='text-3xl font-bold text-center mb-20'>Let us handle your <br /> project, <span className='text-[#F73E7B]'>Professionally</span>.</h1>
            <div className='md:flex'>
                <input type="text" placeholder="First Name" className="input input-bordered w-full me-4" />
                <input type="text" placeholder="Last Name" className="input input-bordered w-full mt-5 md:mt-0" />
            </div>
            <div className='md:flex mt-5'>
                <input type="text" placeholder="Email Address" className="input input-bordered w-full me-4" />
                <input type="text" placeholder="Phone Number" className="input input-bordered w-full mt-5 md:mt-0" />
            </div>
            <div className='flex flex-col items-center'>
                <textarea className="textarea textarea-bordered w-full h-36 mt-5" placeholder="Your Message"></textarea>
                <button className="btn bg-[#F73E7B] mt-12 w-36 text-white">Send Message</button>
            </div>
        </div>
    );
};

export default Contact;