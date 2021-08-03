import React from 'react';
import { useEffect } from 'react';
import './Submenu.css';

const Submenu = ({setOpen, items, filterValue, changeSort}) => {

    const handleEvent = (e) => {
        if (e.target.className === "SortItem__type" || e.target.className.includes("Submenu__list-item")){
            return;
        }
        setOpen(false);
    }

    useEffect(() => { // при клике по другой области закрываем окно
        document.body.addEventListener('click', handleEvent);
        return () => {
            document.body.removeEventListener('click', handleEvent);
        }
    }, [])

    const elements = items.map(({id, name, type}) => {
        const active = filterValue.type === type ? "Submenu__list-item_active" : null;
        return (
           <li className = {`Submenu__list-item ${active}`}
                key = {id}
                onClick = {() => {
                    changeSort({type, name});
                    setOpen(false)}}>

                        {name}

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