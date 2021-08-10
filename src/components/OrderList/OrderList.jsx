import React from 'react';
import OrderItem from '../OrderItem/OrderItem';
import './OrderList.css';

const OrderList = ({orders}) => {
    
    const sameOrders = orders.reduce((prev, item) => {
        prev[item.id] = {
            name: item.name,
            sum: (prev[item.id] === undefined ? 0 : prev[item.id].sum) + item.itemPrice,
            count: (prev[item.id] === undefined ? 0 : prev[item.id].count) + 1,
        }
        return prev;
    }, {});

    const items = [];

    for (let key in sameOrders){
        items.push({
            id: key,
            ...sameOrders[key]
        })
    };

    const elems = items.map(item => {
        return (
            <OrderItem key = {item.id} {...item}/>
        )
    })

    return (
        <div className = "OrderList">
            <ul className = "OrderList__list">
                {elems}
            </ul>   
        </div>
    )
}

export default OrderList;