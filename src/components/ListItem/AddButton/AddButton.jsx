import React from 'react';
import { useState } from 'react';
import './AddButton.css';
import img1 from './images/plus-orange.svg'
import img2 from './images/plus-white.svg';

const AddButton = ({name, pizzaType, sizeType, addItemToOrder}) => {
    
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count => count + 1);
    }

    return(
        <div className = "AddButton"
            onClick = {() => {
                addItemToOrder(name, pizzaType, sizeType);
                incrementCount();
            }}>

            <img className = "AddButton__child AddButton__img" src={img1} alt="" />
            <div className="AddButton__child AddButton__name">
                Добавить
            </div>
            <div className="AddButton__child AddButton__count">
                {count}
            </div>

        </div>
    )
}

export default AddButton;