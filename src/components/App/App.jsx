import React, { useEffect } from 'react';
import "./App.css";
import {
    Header, InteractiveBar, FilterValue, List
} from '../index';
import { useState } from 'react';
import EmptyBasket from '../EmptyBasket/EmptyBasket';

const App = () => {

    const [categories, setCategories] = useState([
        {id: 1, name: "Все", isActive: true, type: 5},
        {id: 2, name: "Мясные", isActive: false, type: 0},
        {id: 3, name: "Вегетарианская", isActive: false, type: 1},
        {id: 4, name: "Гриль", isActive: false, type: 2},
        {id: 5, name: "Острые", isActive: false, type: 3},
        {id: 6, name: "Закрытые", isActive: false, type: 4},
    ]);

    const [selectedCategory, setSelectedCategory] = useState("Все");

    const [pizzas, setPizzas] = useState([]);

    const changeCategory = (type) => {
        setSelectedCategory(type);
    }

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

    useEffect(() => {
        fetch("http://localhost:3000/db.json")
            .then((res) => res.json())
            .then((res) => setPizzas(res.pizzas));
    }, [])

    const findActiveCategoryType = () => {
        return categories.find(item => item.isActive).type;
    }

    const filteredItemsByCategory = pizzas.filter(item => {
        if (findActiveCategoryType() === 5){
            return item;
        }
        return item.category === findActiveCategoryType()}
    );

    console.log(filteredItemsByCategory);

    return (
        <div>
            <div className="container">
                <Header/>
                <InteractiveBar 
                    categories = {categories} 
                    onSetActive = {setActive}
                    onChangeCategory = {changeCategory}/>
                <FilterValue title = {selectedCategory}/>
                <List items = {filteredItemsByCategory}/>

                <EmptyBasket/>
            </div>
        </div>
    )
}

export default App;