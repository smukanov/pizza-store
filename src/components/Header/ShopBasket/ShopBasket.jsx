import React from 'react';
import './ShopBasket.css';
import img from './images/shop-basket.svg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
        <Link to = "/shop">
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
        </Link>
    )
}

export default ShopBasket;