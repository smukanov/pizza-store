import React from 'react';
import { useSelector } from 'react-redux';
import './AddButton.css';
import img1 from './images/plus-orange.svg'
import img2 from './images/plus-white.svg';

const AddButton = ({id, name, pizzaType, sizeType, addItemToOrder}) => {
    
    const {ordersCount} = useSelector(({orders}) => {
        return {
            ordersCount: orders.items,
        }
    })

    let count = 0;

    ordersCount.forEach(item => {
        if (item.id === id){
            count++;
        }
    })

    return(
        <div className = "AddButton"
            onClick = {() => {
                addItemToOrder(name, pizzaType, sizeType);
            }}>

            <img className = "AddButton__child AddButton__img" src={img1} alt="" />
            <div className="AddButton__child AddButton__name">
                Добавить
            </div>
            <div className="AddButton__child AddButton__count">
                {count}
            </div>

        </div>
    )
}

export default AddButton;