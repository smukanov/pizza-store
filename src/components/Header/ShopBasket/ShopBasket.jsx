import React from 'react';
import './ShopBasket.css';
import img from './images/shop-basket.svg';

const ShopBasket = () => {
    return (
        <div className = "ShopBasket">
                <div className="ShopBasket__price">
                    <span>520</span>
                    <span>P</span>
                </div>
                <div className="ShopBasket__quantity">
                    <img className = "ShopBasket__img" src={img} alt="" />
                    <span>3</span>
                </div>
            </div>
    )
}

export default ShopBasket;