import React from 'react';
import './RandomAnswer.css'

const RandomAnswer = (props) => {
    const { randomCart } = props;


    return (
        <div className='random-container' >
            <h1 className='random-text'>You should buy: {randomCart.name}</h1>
            <img src={randomCart.picture} alt=''></img>

        </div>
    );
};

export default RandomAnswer;