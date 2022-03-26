import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
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
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Car;