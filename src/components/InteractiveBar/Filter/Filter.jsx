import React from 'react';
import { connect } from 'react-redux';
import { setCategory } from '../../../redux/actions/filterAction';
import './Filter.css';

const Filter = ({categories, activeCategory, changeCategory}) => {

    const elements = categories.map(({id, name, label}) => {

        const active = name === activeCategory ? "Filter__item_active" : null;
        
        return (
            <div className={`Filter__item ${active}`} 
                key = {id}
                onClick = {() => changeCategory(name)}>
                {label}
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

const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories,
        activeCategory: state.filter.selectedCategory,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCategory: (name) => dispatch(setCategory(name)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);