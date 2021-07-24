import React from 'react';
import Submenu from './Submenu/Submenu'
import './SortItem.css';
import img from './images/arrow-up.svg';
import { useState } from 'react';

const SortItem = () => {

    const [isOpened, setOpen] = useState(false);

    const [filterValue, setFilterValue] = useState("по популярности");

    return (
        <div className="SortItem__wrapper">
            <div className="SortItem">
                <img className = "SortItem__img" src={img} alt=""/>
                <span className = "SortItem__label">Сортировка по:</span>
                <span className = "SortItem__type" onClick = {() => setOpen(x => !x)}>{filterValue}</span>
            </div>
            {isOpened && <Submenu filterValue = {filterValue}
                                    changeFilterValue = {setFilterValue}
                                    setOpen = {setOpen}/>}
        </div>
    )
}

export default SortItem;