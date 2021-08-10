import React from 'react'
import './OrderItem.css'

const OrderItem = ({id, name, count, sum}) => {
    return (
        <li className = "OrderItem" onClick = {() => console.log(id)}>
            <div className = "OrderItem__info">
                <span className = "OrderItem__info-name">{name}.</span>
                <span className = "OrderItem__info-count">Количество: {count}.</span>
                <span className = "OrderItem__info-sum">Сумма: {sum}</span>
            </div>

            <button className = "OrderItem__btn-delete">x</button>
        </li>
    )
}

export default OrderItem;