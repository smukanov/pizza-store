import React from 'react';
import "./Logo.css";
import logo from './images/logo.svg';
import { Link } from 'react-router-dom';


const Logo = () => {
    return (
        <Link to = "/">
            <div className = "Logo">

<div className = "Logo__img-wrapper">
    <img className = "Logo__img" src={logo} alt="логотип" />
</div>
<div className = "Logo__text">
    <div className = "Logo__title">
        SuSha Pizza
    </div>
    <div className = "Logo__subtitle">
        The most delicious pizza in the world
    </div>
</div>

</div>
        </Link>
    )
}

export default Logo