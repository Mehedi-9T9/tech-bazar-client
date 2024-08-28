import React from 'react';

const ProductCart = ({ product }) => {
    const { photo, title, price, brand } = product
    return (
        <div className="card bg-base-100  shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={photo}
                    alt={title}
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <div className='flex gap-x-10'>
                    <p>Price : {price}</p>
                    <p>Brand: {brand}</p>
                </div>
                <h2 className="card-title">{title}</h2>


            </div>
        </div>
    );
};

export default ProductCart;