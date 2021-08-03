import React from 'react';
import Submenu from './Submenu/Submenu'
import './SortItem.css';
import img from './images/arrow-up.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setSortBy } from '../../../redux/actions/filterAction';

const SortItem = () => {

    const [isOpened, setOpen] = useState(false); // открыть закрыть пункт меню

    const dispatch = useDispatch();

    const changeSort = (obj) => {
        dispatch(setSortBy(obj));
    }

    const {sortTypes, selectedSort} = useSelector(({categories, filter}) => {
        return {
            sortTypes: categories.sortTypes,
            selectedSort: filter.selectedSortedBy,
        }
    })

    return (
        <div className="SortItem__wrapper">
            <div className="SortItem">
                <img className = "SortItem__img" src={img} alt=""/>
                <span className = "SortItem__label">Сортировка по:</span>
                <span className = "SortItem__type" onClick = {() => setOpen(x => !x)}>{selectedSort.name}</span>
            </div>
            {isOpened && <Submenu 
                            setOpen = {setOpen}
                            items = {sortTypes}
                            filterValue = {selectedSort}
                            changeSort = {changeSort}/>}
        </div>
    )
}

export default SortItem;