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
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="text-center">
                            <div>
                                <div><img src={review.image} alt="" /></div>
                                <div>
                                    <p>{review.name}</p>
                                    <p>{review.title}</p>
                                </div>
                            </div>
                            <p>{review.details}</p>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                                className="mx-auto mb-0 mt-12"
                            />
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </>
    );
};

export default Testimonial;