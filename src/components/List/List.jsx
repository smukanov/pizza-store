import React from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';
import EmptyItem from '../App/EmptyItem/EmptyItem';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { setItems } from '../../redux/actions/itemsAction';

const List = ({items, setPizzas}) => {

    const loadData = () => {
        fetch("http://localhost:3000/db.json")
            .then((res) => res.json())
            .then((res) => setPizzas(res.pizzas))
    };

    useEffect(loadData, []);

    const elems = items.map(item => {
        return (
            <ListItem key = {item.id} {...item}/>
        )
    })
    
    if (elems.length === 0){
        return (
            <EmptyItem/>
        )
    }
    return (
        <div className="List">
            {elems}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items.items,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPizzas: (pizzas) => dispatch(setItems(pizzas)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);