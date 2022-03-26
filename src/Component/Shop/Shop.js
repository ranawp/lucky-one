import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);

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
        <div>
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
            <div className='article'>
                <article>
                    <h4>How React work</h4>
                    <p>
                        React makes interactive and flexible of website.React js is open source. It is a javascript library.
                        When Facebook developers realised that DOM is slow is an application interface.  It means logical structure of documents. React implements a virtual DOM. Virtual DOM represents a DOM tree. when it needs to read or write to the DOM , it will use the virtual DOM.
                        Virtual dom tries to be an efficient way to update the browser DOM. React element are plain object and it is cheap to create. so, react is very fast. React can also be used im the server with Node.js.
                    </p>
                    <h3>Props vs State</h3>

                    <h4>props:</h4>
                    1- props used for one component to another component. <br />
                    2-props are immutable . <br />
                    3- props can be used with state and function components. <br />
                    4-props are readable only. <br />
                    5-props make component reusable <br />
                    6- props can be used in child components. <br />

                    <h4>State:</h4>
                    1-state used for passing within the component. <br />
                    2-state is mutable. <br />
                    3-state can be used with only the state component. <br />
                    4-state use for read and write. <br />
                    5-state can not make reusable. <br />
                    6-state can not accesd byu child component. <br />

                </article>
                <article>
                </article>
            </div>
        </div>
    );
};

export default Shop;