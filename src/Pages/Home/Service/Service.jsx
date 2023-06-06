import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ServiceCard from '../../Sheared/ServiceCard/ServiceCard';

const Service = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: services = [], } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosSecure.get('/services')
            return res.data
        }
    })

    return (
            <div className='flex flex-col  web-font max-w-screen-2xl mx-auto'>
                <h1 className='text-3xl font-bold mt-24 mb-20 text-center'>Our Awesome <span className='text-[#F73E7B]'>Services</span></h1>
                <div className='flex flex-col md:flex-row gap-14 items-center justify-between'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
                <button className="btn bg-[#F73E7B] text-center mt-12 w-36 mx-auto text-white">Explore more</button>
            </div>
    );
};

export default Service;