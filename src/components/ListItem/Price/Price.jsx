import React from 'react';
import './Price.css';

const Price = ({price}) => {
    return (
        <div className = "Price">
            <span>{price}</span> <span>Тг</span>
        </div>
    )
}

export default Price;