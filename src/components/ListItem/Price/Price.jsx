import React from 'react';
import './Price.css';

const Price = ({price}) => {
    return (
        <div className = "Price">
            от <span>{price}</span> <span>P</span>
        </div>
    )
}

export default Price;