import React from 'react';
import './SettingBar.css';

const SettingBar = ({types, sizes, typeItems, typeSizes, changeType, changeSize, selectedType, selectedSize}) => {

    const typesElems = typeItems.map((item, index) => {
        const active = selectedType === index ? "btn_active" : null;
        const disabled = !types.includes(index) ? "btn_disabled" : null;
        return (
            <button 
                className = {`SettingBar__type ${active} ${disabled}`}
                key = {index}
                onClick = {() => changeType(index)}>
                    {item}
            </button>
        )
    })

    const sizeElems = typeSizes.map(({type, size}, index) => {
        const active = selectedSize === size ? "btn_active" : null;
        const disabled = !sizes.includes(size) ? "btn_disabled" : null;
        return (
            <button 
                className = {`SettingBar__size ${active} ${disabled}`}
                key = {index}
                onClick = {() => changeSize(size)}>
                    {size} <span>см.</span>
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

