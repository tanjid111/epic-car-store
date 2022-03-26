import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // const { picture, name } = props.car;
    console.log(cart);
    return (
        <div>
            <h3>Selected Cars: {cart.length}</h3>
            <img></img>
        </div>
    );
};

export default Cart;