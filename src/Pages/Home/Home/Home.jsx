import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../../Sheared/Navbar/Navbar';
import Service from '../Service/Service';
import Information from '../Information/Information';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Banner></Banner>
           <Service></Service>
           <Information></Information>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;