import React from 'react';
import { useEffect } from 'react';
import './Submenu.css';

const Submenu = ({filterValue, changeFilterValue, setOpen}) => {
    
    const submenuItems = [
        {name: "by__popularity", label: "по популярности"},
        {name: "by__price", label: "по цене"},
        {name: "by__alphabyte", label: "по алфавиту"},        
    ]

    const onClickedItem = (label) => {
        changeFilterValue(label);
        setOpen(false);
    }

    const handleEvent = (e) => {
        if (e.target.className === "SortItem__type" || e.target.className.includes("Submenu__list-item")){
            return;
        }
        setOpen(false);
        console.log(e.target.className);
    }

    useEffect(() => {
        document.body.addEventListener('click', handleEvent);
        return () => {
            document.body.removeEventListener('click', handleEvent);
            console.log('remove');
        }
    }, [])

    const elements = submenuItems.map(({name, label}) => {
        const active = filterValue === name ? "Submenu__list-item_active" : null;
        debugger;
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