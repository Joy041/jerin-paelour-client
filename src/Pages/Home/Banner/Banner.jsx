import React from 'react';
import bannerImg from '../../../assets/images/beautiful-asian-woman.png'

const Banner = () => {
    return (
        <div className="hero h-[600px] mb-56 md:mb-36 lg:mb-0 max-w-screen-2xl mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">BEAUTY SALON <br /> FOR EVERY WOMEN</h1>
                    <p className="py-6 lg:me-36">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button className="btn bg-[#F73E7B] text-white text-xs font-medium">Get an Appointment</button>
                </div>
                <div >
                    <img src={bannerImg} className="h-[478px] bg-base-200 rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default Banner;