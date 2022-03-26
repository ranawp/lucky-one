import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    console.log(cart)

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (products) => {
        const newCart = [...cart, products]
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <div className='cart-info'>
                    <p className='selected-Books'>Selected Books</p>

                    {/* <p>{cart.length}</p> */}
                    <p>{cart.img}</p>
                    {cart.map((item) => (
                        <p key={item.id}>{item.name} <svg xmlns="http://www.w3.org/2000/svg" className='cart-delete-btn' viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg></p>



                    ))}
                    <button className='cart-info-btn' >CHOOSE 1 FOR ME</button>
                    <button className='cart-info-btn'>CHOOSE AGAIN</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;