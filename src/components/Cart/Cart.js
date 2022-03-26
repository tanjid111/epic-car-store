import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { cart, chooseOne, chooseAgain } = props;



    return (
        <div>
            <div className='cart-container'>
                <h3>Selected Cars</h3>
                <div className='cart'>
                    {
                        cart.map(car => (<h5 key={car.id}>
                            <img src={car.picture} alt=""></img>
                            {car.name}</h5>))
                    }
                </div>



                <button onClick={() => chooseOne()}>
                    <p>Choose One For Me</p>
                </button>

                <button onClick={() => chooseAgain()}>
                    <p>Choose Again</p>
                </button>

            </div>

        </div>
    );
};

export default Cart;