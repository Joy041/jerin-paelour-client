import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../../Sheared/Navbar/Navbar';
import Service from '../Service/Service';
import Information from '../Information/Information';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Banner></Banner>
           <Service></Service>
           <Information></Information>
           <Testimonial></Testimonial>
           <Contact></Contact>
        </div>
    );
};

export default Home;