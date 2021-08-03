import React from 'react';
import { useSelector } from 'react-redux';
import './FilterValue.css';

const FilterValue = () => {
    const {title} = useSelector(({filter}) => {
        return {
            title: filter.selectedCategory.name,
        }
    })

    return (
        <div className="FilterValue">
            <span>{title} </span>
            <span>пиццы</span>
        </div>
    )
}

export default FilterValue;