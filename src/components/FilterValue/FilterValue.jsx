import React from 'react';
import './FilterValue.css';

const FilterValue = ({title}) => {
    return (
        <div className="FilterValue">
            <span>{title} </span>
            <span>пиццы</span>
        </div>
    )
}

export default FilterValue;