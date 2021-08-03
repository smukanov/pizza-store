import React from 'react';
import './ShopBasket.css';
import img from './images/shop-basket.svg';
import { useSelector } from 'react-redux';

const ShopBasket = () => {

    const {orderItems} = useSelector(({orders}) => {
        return {
            orderItems: orders.items,
        }   
    })

    let sum = 0;
    orderItems.forEach(({itemPrice}) => {
        sum += itemPrice;
    })
    const count = orderItems.length;

    return (
        <div className = "ShopBasket">
                <div className="ShopBasket__price">
                    <span>{sum}</span>
                    <span>Тг</span>
                </div>
                <div className="ShopBasket__quantity">
                    <img className = "ShopBasket__img" src={img} alt="" />
                    <span>{count}</span>
                </div>
            </div>
    )
}

export default ShopBasket;