import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Shop.css'

const Shop = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('carDb.json')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    return (
        <div className="shop-container">
            <div className="cars-container">
                <h3>This is for products:{cars.length}</h3>
            </div>
            <div>
                <h3>Selected Cars</h3>
            </div>
        </div>
    );
};

export default Shop;