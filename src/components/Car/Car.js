import React from 'react';
import './Car.css'
const Car = (props) => {
    const { picture, name, price } = props.car;
    const { handleAddToCart } = props;

    return (
        <div className='car'>
            <img src={picture} alt=""></img>
            <div className='car-info'>
                <p className='car-name'>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(props.car)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Car;