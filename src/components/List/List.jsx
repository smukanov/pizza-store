import React from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';
import EmptyItem from '../App/EmptyItem/EmptyItem';
import { useSelector } from 'react-redux';
import sortingByType from '../../service/service';

const List = () => {
    const {items, selectedCategory, sortType} = useSelector(({items, filter}) => {
        return {
            items: items.items,
            selectedCategory: filter.selectedCategory,
            sortType: filter.selectedSortedBy,
        }
    })

    const filteredItems = items.filter(item => { // находим пиццы по заданной категории
        if (selectedCategory.type === 100){
            return item;
        }
        return item.category === selectedCategory.type;
    })

    sortingByType(sortType.type, filteredItems);

    const elems = filteredItems.map(item => { // трансформируем элементы в jsx
        return (
            <ListItem key = {item.id} {...item}/>
        )
    })

    if(elems.length === 0){ // если по заданной категории не найдено пицц, возвращаем "не найдено"
        return <EmptyItem/>
    }

    return (
        <div className="List">
            {elems}
        </div>
    )
}

export default List;