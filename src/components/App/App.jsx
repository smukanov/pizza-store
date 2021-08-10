import React, { useEffect } from 'react';
import "./App.css";
import {
    Header, InteractiveBar, FilterValue, List
} from '../index';
import { useDispatch } from 'react-redux';
import { setItems } from '../../redux/actions/itemsAction';
import { BrowserRouter, Route } from 'react-router-dom';
import ShopPage from '../ShopPage/ShopPage';

const App = () => {
    const dispatch = useDispatch();

    const loadData = () => {  // посылаем запрос на сервер для загрузки данных
        fetch("http://localhost:3000/db.json")
            .then((res) => res.json())
            .then((res) => dispatch(setItems(res.pizzas)))
    };

    useEffect(loadData, []);

    return (
        <BrowserRouter>
            <div className = "App">
                <div className="container">
                    <Header/>
                        <Route path = "/" exact>
                            <InteractiveBar/>
                            <FilterValue/>
                            <List/>
                        </Route>
                        <Route path = "/shop" exact>
                            <ShopPage/>
                        </Route>
                </div>
        </div>
        </BrowserRouter>
    )
}

export default App;