import React from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';

const List = () => {
    return (
        <div className="List">
            <ListItem name = "Чизбургер пицца" price = "395"/>
            <ListItem name = "Сырная" price = "450"/>
            <ListItem name = "Креветки по азиатски" price = "290"/>
            <ListItem name = "Сырный цыпленок" price = "385"/>

            <ListItem name = "Чизбургер пицца" price = "395"/>
            <ListItem name = "Сырная" price = "450"/>
            <ListItem name = "Креветки по азиатски" price = "290"/>
            <ListItem name = "Сырный цыпленок" price = "385"/>
        </div>
    )
}

export default List;