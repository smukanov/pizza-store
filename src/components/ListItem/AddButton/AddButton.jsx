import React from 'react';
import './AddButton.css';
import img1 from './images/plus-orange.svg'
import img2 from './images/plus-white.svg';

const AddButton = () => {
    return(
        <div className = "AddButton">
            <img className = "AddButton__child AddButton__img" src={img1} alt="" />
            <div className="AddButton__child AddButton__name">
                Добавить
            </div>
            <div className="AddButton__child AddButton__count">
                2
            </div>
        </div>
    )
}

export default AddButton;