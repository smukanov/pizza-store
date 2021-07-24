import React from 'react';
import './Submenu.css';

const Submenu = ({filterValue, changeFilterValue, setOpen}) => {
    
    const submenuItems = [
        {name: "by__popularity", label: "по популярности"},
        {name: "by__price", label: "по цене"},
        {name: "by__alphabyte", label: "по алфавиту"},        
    ];

    const onClickedItem = (label) => {
        changeFilterValue(label);
        setOpen(false);
    }

    const elements = submenuItems.map(({name, label}) => {
        const active = filterValue === name ? "Submenu__list-item_active" : null;
        return (
           <li className = {`Submenu__list-item ${active}`}
                key = {name}
                onClick = {() => onClickedItem(label)}>
               {label}
           </li>
        )
    })
    return (
        <div className="Submenu">
            <ul className="Submenu__list">
                {elements}
            </ul>
        </div>
    )
}

export default Submenu;