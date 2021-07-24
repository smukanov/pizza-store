import React from 'react';
import Filter from './Filter/Filter';
import SortItem from './SortItem/SortItem';
import './InteractiveBar.css';

const InteractiveBar = ({categories, onSetActive}) => {
    return (
        <div className = "InteractiveBar">
            <div className="InteractiveBar__inner">
                <Filter data = {categories} onSetActive = {onSetActive}/>
                <SortItem/>
            </div>
        </div>
    )
}

export default InteractiveBar;