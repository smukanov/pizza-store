import React from 'react';
import { useSelector } from 'react-redux';
import EmptyBasket from '../EmptyBasket/EmptyBasket';
import OrderList from '../OrderList/OrderList';
import './ShopPage.css';

const ShopPage = () => {
    const {orders} = useSelector(({orders}) => {
        return {
            orders: orders.items
        }
    })
    
    if (orders.length === 0){
        return <EmptyBasket/>
    }

    return (
        <div className = "ShopPage">
            <OrderList orders = {orders}/>
        </div>
    )
}

export default ShopPage