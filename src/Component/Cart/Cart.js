import React from 'react';
import Product from '../Product/Product';

const cart = (props) => {
    const cart= props.cart;
    console.log(cart);
    let total=0;
    for (let i=0; i<cart.length; i++){
        const product= cart[i];
    total = total + product.price;
    }
    
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Orders: {cart.length}</p>
            <p>Total Price: {total}</p>   
        </div>
    );
};

export default cart;