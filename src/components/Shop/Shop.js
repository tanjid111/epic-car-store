import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import RandomAnswer from '../RandomAnswer/RandomAnswer';
import './Shop.css'

const Shop = () => {
    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);
    const [randomCart, setRandomCart] = useState([]);
    // console.log(randomCart);
    useEffect(() => {
        fetch('carDb.json')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    const handleAddToCart = (car) => {
        const newCart = [...cart, car];
        setCart(newCart);
    }

    const arrayLength = cart.length;
    const chooseOne = () => {
        const randNum = Math.floor(Math.random() * (arrayLength));
        const chosen = cart[randNum]
        setRandomCart(chosen);
    }

    const chooseAgain = () => {
        setCart([]);
        setRandomCart([]);
    }

    return (
        <div className="shop-container">
            <div className="cars-container">
                {
                    cars.map(car => <Car
                        key={car.id}
                        car={car}
                        handleAddToCart={handleAddToCart}
                    ></Car>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    chooseOne={chooseOne}
                    chooseAgain={chooseAgain}
                ></Cart>

                <RandomAnswer randomCart={randomCart}></RandomAnswer>


            </div>
        </div>
    );
};

export default Shop;