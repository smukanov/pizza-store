import React from 'react';
import Filter from './Filter/Filter';
import SortItem from './SortItem/SortItem';
import './InteractiveBar.css';

const InteractiveBar = () => {
    return (
        <div className = "InteractiveBar">
            <div className="InteractiveBar__inner">
                <Filter/>
                <SortItem/>
            </div>
        </div>
    )
}

export default InteractiveBar;