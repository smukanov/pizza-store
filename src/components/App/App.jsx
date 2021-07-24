import React from 'react';
import "./App.css";
import {
    Header, InteractiveBar, FilterValue, List
} from '../index';
import { useState } from 'react';

const App = () => {

    const [categories, setCategories] = useState([
        {id: 1, name: "Все", isActive: true},
        {id: 2, name: "Мясные", isActive: false},
        {id: 3, name: "Вегетарианская", isActive: false},
        {id: 4, name: "Гриль", isActive: false},
        {id: 5, name: "Острые", isActive: false},
        {id: 6, name: "Закрытые", isActive: false},
    ]);

    const setActive = (id) => {
        const newArr = categories.map(item => {
            if (item.isActive){
                return {
                    ...item,
                    isActive: false,
                }
            }
            if (item.id === id){
                return {
                    ...item,
                    isActive: true,
                }
            }
            return item;
        });
        setCategories(newArr);
    }

    return (
        <div>
            <div className="container">
                <Header/>
                <InteractiveBar categories = {categories} onSetActive = {setActive}/>
                <FilterValue/>
                <List/>
            </div>
        </div>
    )
}

export default App;