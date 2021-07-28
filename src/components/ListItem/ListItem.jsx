import React from 'react';
import SettingBar from './SettingBar/SettingBar';
import './ListItem.css';
import Price from './Price/Price';
import AddButton from './AddButton/AddButton';


const ListItem = ({name, imageUrl, types, sizes, price, category, rating}) => {
    console.log("types: " + types);
    return (
        <div className="ListItem">
            <div className="ListItem__img-wrapper">
                <img className = "ListItem__img" src={imageUrl} alt="" />
            </div>
            <div className="ListItem__name">
                {name}
            </div>
            <SettingBar types = {types} sizes = {sizes}/>
            <div className="OrderBar OrderBar__position">
                <Price price = {price}/>
                <AddButton/>
            </div>
        </div>
    )
}

export default ListItem;