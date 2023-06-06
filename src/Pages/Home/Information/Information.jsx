import React from 'react';
import img from '../../../assets/images/engin-akyurt.png'

const Information = () => {
    return (
        <div className=" h-[350px] mt-48">
            <div className=" flex flex-col justify-center items-center lg:flex-row-reverse mx-8">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Let us handle your <br /> screen <span className='text-[#F73E7B]'>Professionally</span>.</h1>
                    <p className="py-6">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum</p>
                </div>
                <div className="card w-72 lg:w-[1000px] lg:me-28 shadow-2xl bg-base-100">
                    <img src={img} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Information;