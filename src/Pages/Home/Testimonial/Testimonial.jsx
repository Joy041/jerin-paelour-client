import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'

const Testimonial = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: reviews = [] } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiosSecure.get('/reviews')
            return res.data
        }
    })

    return (
        <div className='mt-48 mx-2 h-full max-w-screen-2xl lg:mx-auto'>
            <h1 className='text-3xl font-bold text-center mb-20'>Testimonials</h1>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper h-full"
            >
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="text-center mb-10 h-full">
                            <div className='flex justify-center items-center'>
                                <div><img src={review.image} width={56} className='rounded-full me-3' alt="" /></div>
                                <div>
                                    <p className='text-xl font-bold'>{review.name}</p>
                                    <p className='text-sm font-medium'>{review.title}</p>
                                </div>
                            </div>
                            <p className='mt-6'>{review.details}</p>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                                className="mx-auto mt-12"
                            />
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Testimonial;