import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../../redux/actions/filterAction';
import './Filter.css';

const Filter = () => {

    const dispatch = useDispatch();

    const {categories, activeCategory} = useSelector(({categories, filter}) => {
        return {
            categories: categories.categories,
            activeCategory: filter.selectedCategory,
        }
    })

    const elements = categories.map(({id, name, type}) => {

        const active = type === activeCategory.type ? "Filter__item_active" : null;
        
        return (
            <div className={`Filter__item ${active}`} 
                key = {id}
                onClick = {() => {dispatch(setCategory({
                    type,
                    name,
                }))}}>
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