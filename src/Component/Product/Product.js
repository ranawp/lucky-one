import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const { name, img, id, price } = props.product

    return (
        <div className='product'>

            <div className='product-info'>
                <img src={img} alt="" />
                <p> <span className='books-name'> Name:</span> {name}</p>
                <p> <span className='books-name'>Id:</span>{id}</p>
                <p> <span className='books-name'>Price:</span>{price}</p>
            </div>

            <button className='cart-button'>
                <p>Add to Cart</p>
            </button>
        </div>

    );
};

export default Product;