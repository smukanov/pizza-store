import React from 'react';
import SettingBar from './SettingBar/SettingBar';
import './ListItem.css';
import Price from './Price/Price';
import AddButton from './AddButton/AddButton';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from '../../redux/actions/orderAction';



const ListItem = ({id, name, imageUrl, types, sizes, price}) => {

    const dispatch = useDispatch();
    
    const typeItems = ["тонкое", "традиционное"];

    const typeSizes = [
        {type: 1, size: 25},
        {type: 2, size: 30},
        {type: 3, size: 35}
    ];

    const [selectedType, setSelectedType] = useState(types[0]);
    const [selectedSize, setSelectedSize] = useState(sizes[0]);

    const changeType = (type) => {
        setSelectedType(type);
    }

    const changeSize = (size) => {
        setSelectedSize(size);
    }

    let itemPrice = null;
    
    const setPrice = () => {
        switch (selectedSize){
            case typeSizes[0].size:
                itemPrice = price[0];
                break;
            case typeSizes[1].size:
                itemPrice = price[1];
                break;
            case typeSizes[2].size:
                itemPrice = price[2];
                break;
            default:
                break;
        }
    }

    setPrice();

    const addItemToOrder = (name, pizzaType, sizeType) => { // добавить пиццы в заказ
        dispatch(addOrder({
            id,
            name,
            pizzaType,
            sizeType,
            itemPrice,
        }))
    }

    return (
        <div className="ListItem">
            <div className="ListItem__img-wrapper">
                <img className = "ListItem__img" src={imageUrl} alt="" />
            </div>
            <div className="ListItem__name">
                {name}
            </div>

            <SettingBar 
                types = {types} 
                sizes = {sizes}
                typeItems = {typeItems}
                typeSizes = {typeSizes}
                selectedType = {selectedType}
                selectedSize = {selectedSize}
                changeSize = {changeSize}
                changeType = {changeType}/>

            <div className="OrderBar OrderBar__position">
                <Price price = {itemPrice}/>

                <AddButton 
                    addItemToOrder = {addItemToOrder}
                    id = {id}
                    name = {name}
                    pizzaType = {selectedType}
                    sizeType = {selectedSize}/>
            </div>
        </div>
    )
}

export default ListItem;