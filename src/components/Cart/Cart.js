import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { car, randomCart } = props;
    const { picture, name } = car;
    console.log(props);

    return (
        <div>
            <div className='cart'>
                <img src={picture} alt=""></img>
                <p className='text'>Name: {name}</p>
                <p>{randomCart.name}</p>
            </div>

        </div>
    );
};

export default Cart;