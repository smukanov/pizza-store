import React from 'react';
import './EmptyBasket.css';
import smile from './images/smile-img.svg';
import img from './images/shop-cart.png';
import { Link } from 'react-router-dom';

const EmptyBasket = () => {
    return (
        <div className="EmptyBasket__wrapper">
            <div className = "EmptyBasket">
            <div className="EmptyBasket__header">
                <span className="EmptyBasket__title">
                    Корзина пустая
                </span>
                <img className = "EmptyBasket__smile-img" src={smile} alt="" />
            </div>
            <div className="EmptyBasket__text">
                <p>Верояней всего, вы не заказывали еще пиццу.</p>
                <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            </div>
            <img className = "EmptyBasket__img" src={img} alt="" />
            <div className="EmptyBasket__btn-wrapper">
                <Link to = "/">
                    <button className = "EmptyBasket__btn">Вернуться назад</button>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default EmptyBasket;