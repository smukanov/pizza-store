import React from 'react';
import './Filter.css';

const Filter = ({data, onSetActive, onChangeCategory}) => {

    const changeFilter = (id, name) => {
        onSetActive(id);
        onChangeCategory(name);
    }

    const elements = data.map(({id, name, isActive}) => {
        const active = isActive ? "Filter__item_active" : null;
        return (
            <div className={`Filter__item ${active}`} 
                key = {id}
                onClick = {() => changeFilter(id, name)}>
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