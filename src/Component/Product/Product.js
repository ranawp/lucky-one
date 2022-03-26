import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const { name, img, id, price } = props.product

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{id}</p>
            <p>{price}</p>

        </div>
    );
};

export default Product;