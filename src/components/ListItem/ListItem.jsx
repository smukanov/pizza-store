import React from 'react';
import SettingBar from './SettingBar/SettingBar';
import './ListItem.css';
import img from './images/pizza-img.svg';
import Price from './Price/Price';
import AddButton from './AddButton/AddButton';


const ListItem = ({name, price}) => {
    return (
        <div className="ListItem">
            <div className="ListItem__img-wrapper">
                <img className = "ListItem__img" src={img} alt="" />
            </div>
            <div className="ListItem__name">
                {name}
            </div>
            <SettingBar/>
            <div className="OrderBar OrderBar__position">
                <Price price = {price}/>
                <AddButton/>
            </div>
        </div>
    )
}

export default ListItem;