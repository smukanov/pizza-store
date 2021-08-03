import React from 'react';
import Logo from './Logo/Logo';
import ShopBasket from './ShopBasket/ShopBasket';
import './Header.css';

const Header = () => {
    
    console.log("Header");

    return (
        <div className = "Header">

            <div className="Header__inner">
                <Logo/>

                <ShopBasket/>
            </div>
            
        </div>
    )
}

export default Header;