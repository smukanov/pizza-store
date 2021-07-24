import React from 'react';
import './Filter.css';

const Filter = ({data, onSetActive}) => {

    const elements = data.map(({id, name, isActive}) => {
        const active = isActive ? "Filter__item_active" : null;
        return (
            <div className={`Filter__item ${active}`} 
                key = {id}
                onClick = {() => {onSetActive(id)}}>
                {name}
            </div>
        )
    })
    return (
        <div className = "Filter">
            <div className="Filter__inner">
                {elements}
            </div>
        </div>
    )
}

export default Filter;