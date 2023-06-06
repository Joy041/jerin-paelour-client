import React from 'react';

const ServiceCard = ({ service }) => {

    const { name, details, image, price } = service

    return (
        <div className="card w-72 md:w-96 h-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-">
                <img src={image} alt="Shoes" className="rounded-xl w-24" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-[#F73E7B]'>${price}</p>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default ServiceCard;