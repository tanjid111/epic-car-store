import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { car } = props;
    const { picture, name } = car;
    // console.log(cart);

    return (
        <div>
            <div className='cart'>
                <img src={picture} alt=""></img>
                <p className='text'>Name: {name}</p>
            </div>
            <button>
                <p>Choose One For Me</p>
            </button>
        </div>
    );
};

export default Cart;