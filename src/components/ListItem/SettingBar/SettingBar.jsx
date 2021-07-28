import React from 'react';
import { useState } from 'react';
import './SettingBar.css';

const SettingBar = ({types, sizes}) => {

    const typeItems = ["тонкое", "традиционное"];
    const typeSizes = [25, 30, 35];
    const [selectedType, setSelectedType] = useState(types[0]);
    const [selectedSize, setSelectedSize] = useState(sizes[0]);

    const changeType = (type) => {
        setSelectedType(type);
    }

    const changeSize = (size) => {
        setSelectedSize(size);
    }
 
    const typesElems = typeItems.map((item, index) => {
        const active = selectedType === index ? "btn_active" : null;
        const disabled = !types.includes(index) ? "btn_disabled" : null;
        return (
            <button 
                className = {`SettingBar__type ${active} ${disabled}`}
                onClick = {() => setSelectedType(index)}>
                    {item}
            </button>
        )
    })

    const sizeElems = typeSizes.map(item => {
        const active = selectedSize === item ? "btn_active" : null;
        const disabled = !sizes.includes(item) ? "btn_disabled" : null;
        return (
            <button 
                className = {`SettingBar__size ${active} ${disabled}`}
                onClick = {() => changeSize(item)}>
                    {item} <span>см.</span>
            </button>
        )
    })

    return (
        <div className="SettingBar">
            <div className="SettingBar__row SettingBar__row-type">
                {typesElems}
            </div>
            <div className="SettingBar__row SettingBar__row-size">
                {sizeElems}
            </div>
        </div>
    )
}

export default SettingBar;

