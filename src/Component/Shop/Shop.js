import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <div className='cart-info'>
                    <h4>Selected Books</h4>
                    <button className='cart-info-btn' >CHOOSE 1 FOR ME</button>
                    <button className='cart-info-btn'>CHOOSE AGAIN</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;