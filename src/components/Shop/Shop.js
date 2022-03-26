import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Shop.css'

const Shop = () => {
    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('carDb.json')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    const handleAddToCart = (car) => {
        const newCart = [...cart, car];
        setCart(newCart);
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
            <div>
                <h3>Selected Cars: {cart.length}</h3>


            </div>
        </div>
    );
};

export default Shop;