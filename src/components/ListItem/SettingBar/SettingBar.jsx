import React from 'react';
import './SettingBar.css';

const SettingBar = () => {
    return (
        <div className="SettingBar">
            <div className="SettingBar__row SettingBar__row-type">
                <button className="SettingBar__type SettingBar__type_active">тонкое</button>
                <button className="SettingBar__type">традиционное</button>
            </div>
            <div className="SettingBar__row SettingBar__row-size">
                <button className="SettingBar__size SettingBar__size_active">26 <span>см</span></button>
                <button className="SettingBar__size">30 <span>см</span></button>
                <button className="SettingBar__size">40 <span>см</span></button>
            </div>
        </div>
    )
}

export default SettingBar;