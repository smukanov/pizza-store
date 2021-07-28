import React from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';
import EmptyItem from '../App/EmptyItem/EmptyItem';
import { connect } from 'react-redux';
import { map } from 'bluebird';

const List = ({items}) => {
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

    }
}

const mapDispatchToProps = (dispatch) => {
    debugger;
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);