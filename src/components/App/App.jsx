import React, { useEffect } from 'react';
import "./App.css";
import {
    Header, InteractiveBar, FilterValue, List
} from '../index';
import { useDispatch } from 'react-redux';
import { setItems } from '../../redux/actions/itemsAction';
import { Route } from 'react-router-dom';

const App = () => {
    const dispatch = useDispatch();

    const loadData = () => {  // посылаем запрос на сервер для загрузки данных
        fetch("http://localhost:3000/db.json")
            .then((res) => res.json())
            .then((res) => dispatch(setItems(res.pizzas)))
    };

    useEffect(loadData, []);

    return (
        <div>
            <div className="container">
                <Header/>
                <Route path = "/">
                    <InteractiveBar/>
                    <FilterValue/>
                    <List/>
                </Route>
                <Route path = "shop">
                    <div>
                        Корзина
                    </div>
                </Route>
            </div>
        </div>
    )
}

export default App;